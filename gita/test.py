import google.generativeai as genai

# ✅ Configure API key
genai.configure(api_key="AIzaSyCJtQEl3rqfftnaasRGWeYm6qjwyaxc3_Us")

# ✅ Use Gemini Flash model (faster + cheaper)
model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")

# ✅ Ask a question
response = model.generate_content("Explain how AI works in a few words")

# ✅ Print result
print("⚡ Gemini Answer:", response.text)
