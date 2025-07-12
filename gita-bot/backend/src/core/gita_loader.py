# ✅ irctc_loader.py — Load IRCTC Refund PDF + Manual Data into FAISS

import os
import logging
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings

# --- Logging Setup ---
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# --- Config ---
pdf_path = os.path.join("data", "irctc_refund_policy_clean.pdf")
vectorstore_path = os.path.join("vectorstore", "irctc_faiss")

# --- Load Gemini API Key ---
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise EnvironmentError("❌ GEMINI_API_KEY not found in .env file")

# ✅ Load PDF
if not os.path.exists(pdf_path):
    raise FileNotFoundError(f"❌ PDF not found at: {pdf_path}")

loader = PyPDFLoader(pdf_path)
pdf_docs = loader.load()

# ✅ Add Manual Structured Data (For Better QA)
manually_added_rules = """
IRCTC Sleeper Class Cancellation Rules:
1. Cancel > 48 hrs before departure: ₹60 deduction per passenger
2. Cancel between 48 to 12 hrs: 25% of fare
3. Cancel between 12 to 4 hrs: 50% of fare
4. Cancel < 4 hrs: No refund
"""
manual_doc = Document(page_content=manually_added_rules)

# Combine all
all_docs = pdf_docs + [manual_doc]

# ✅ Chunking
splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
chunks = splitter.split_documents(all_docs)

# ✅ Print preview
print(f"\n📦 Total Chunks Generated: {len(chunks)}\n")
for i, chunk in enumerate(chunks[:5]):
    print(f"Chunk {i+1} Preview:\n{chunk.page_content[:300]}\n{'-'*50}")

# ✅ Embedding + FAISS
embedding_model = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001",
    google_api_key=api_key
)

logging.info("🔄 Embedding and saving to FAISS vectorstore...")
vectorstore = FAISS.from_documents(chunks, embedding_model)
vectorstore.save_local(vectorstore_path)

logging.info("✅ FAISS vectorstore saved to: %s", vectorstore_path)
