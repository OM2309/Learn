# src/core/irctc_bot.py
# IRCTC Refund & Cancellation Bot using Gemini 1.5 Flash + FAISS with memory + calculation

import os
import logging
from dotenv import load_dotenv
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from typing import Optional
import re

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
load_dotenv()

# Configuration
VECTORSTORE_PATH = "vectorstore/irctc_faiss"
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_MODEL = "models/gemini-1.5-flash"

qa_chain = None  # cache once built
user_context = {}  # pseudo-memory


def init_qa_chain():
    global qa_chain
    if qa_chain is not None:
        return qa_chain

    if not GEMINI_API_KEY:
        raise EnvironmentError("Gemini API key not found in environment variable 'GEMINI_API_KEY'.")

    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001",
        google_api_key=GEMINI_API_KEY
    )
    vectorstore = FAISS.load_local(
        folder_path=VECTORSTORE_PATH,
        embeddings=embeddings,
        allow_dangerous_deserialization=True
    )

    llm = ChatGoogleGenerativeAI(
        model=GEMINI_MODEL,
        temperature=0.3,
        google_api_key=GEMINI_API_KEY
    )

    prompt_template = """
You are an expert assistant for IRCTC train ticket cancellation and refund policy.
Use only the context provided below to answer the user's question clearly and accurately.
If the answer is not explicitly present in the context, say: "I don't know based on the given context."

Context:
{context}

Question:
{question}

Answer:
"""
    QA_CHAIN_PROMPT = PromptTemplate.from_template(prompt_template)

    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_kwargs={"k": 5}),
        chain_type_kwargs={"prompt": QA_CHAIN_PROMPT}
    )

    return qa_chain


def extract_price(text: str) -> Optional[int]:
    match = re.search(r"(?:ticket\s+price\s+is|ticket\s+is|₹|Rs\.?)[ ]?(\d+)", text, re.IGNORECASE)
    return int(match.group(1)) if match else None


def extract_class(text: str) -> Optional[str]:
    text = text.lower()
    if "sleeper" in text:
        return "sleeper"
    elif "executive" in text:
        return "executive"
    elif "ac chair" in text or "ac" in text:
        return "ac"
    return None


def calculate_refund(context: dict) -> Optional[int]:
    price = extract_price(context.get("last_question", ""))
    cls = extract_class(context.get("last_question", ""))

    if not price or not cls:
        return None

    # Deduction based on class
    deductions = {
        "sleeper": 60,
        "executive": 240 + 240 * 0.18,  # 18% GST
        "ac": 180 + 180 * 0.18
    }

    deduction = deductions.get(cls)
    if deduction is None:
        return None

    refund = round(price - deduction)
    return max(refund, 0)


def ask_irctc_bot(question: str, user_id: str = "default") -> str:
    try:
        chain = init_qa_chain()

        last_context = user_context.get(user_id, {})
        user_context[user_id] = {"last_question": question, **last_context}

        result = chain.invoke({"query": question})
        answer = result.get("result", "No answer found.")

        refund = calculate_refund(user_context[user_id])
        if refund:
            answer += f"\n\n💸 Estimated refund: ₹{refund}"

        return answer

    except Exception as e:
        logging.error(f"❌ Error in IRCTC bot: {e}", exc_info=True)
        return "An error occurred while processing your question."



