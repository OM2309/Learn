import google.generativeai as genai

# ✅ Step 1: Configure Gemini API Key
genai.configure(api_key="AIzaSyCJtQEl3rqfftnaasRGWeYm6qjwyaxc3_Us")  # Keep this safe!

# ✅ Step 2: Load Gemini 1.5 Flash model
model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")

# ✅ Step 3: Add Gita Context
gita_context = """
Bhagavad Gita says: "You have the right to perform your duties, but you are not entitled to the fruits of your actions."
Focus on action, not on the outcome. Remain balanced in success and failure.
"""

# ✅ Step 4: Ask a Question
user_question = "How should I handle failure in life according to the Gita?"

# ✅ Step 5: Combine context and question into a prompt
prompt = f"""
Context: {gita_context}
Question: {user_question}
Answer:
"""

# ✅ Step 6: Generate response
response = model.generate_content(prompt)

# ✅ Step 7: Print Gita-based answer
print("🧘 Gita Answer:", response.text.strip())
