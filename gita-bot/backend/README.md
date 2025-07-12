<!-- gita-bot/
├── backend/
│   ├── src/                     # Source code folder jahan saara Python code rahega
│   │   ├── __init__.py         # Package banane ke liye empty file
│   │   ├── main.py             # Main entry point jo app ko start karega
│   │   ├── api/                # API-related code (FastAPI endpoints)
│   │   │   ├── __init__.py     # Package banane ke liye
│   │   │   └── routes.py       # API routes jahan user queries handle honge
│   │   ├── core/               # Core logic jahan bot ka main functionality rahega
│   │   │   ├── __init__.py     # Package banane ke liye
│   │   │   ├── gita_loader.py  # Gita PDF load aur process karne ka code
│   │   │   └── gita_bot.py     # Bot logic jahan LangChain aur Hugging Face model use hoga
│   │   ├── models/             # Machine learning models ya related code
│   │   │   ├── __init__.py     # Package banane ke liye
│   │   │   └── huggingface.py  # Hugging Face model setup
│   │   └── utils/              # Utility functions jaise logging ya helpers
│   │       ├── __init__.py     # Package banane ke liye
│   │       └── logger.py       # Logging setup ke liye
│   ├── data/                   # Data folder jahan Gita PDF store hogi
│   │   └── gita.pdf            # User-provided Gita PDF
│   ├── tests/                  # Test cases ke liye folder
│   │   ├── __init__.py         # Package banane ke liye
│   │   └── test_gita_bot.py    # Bot ke liye test cases
│   ├── requirements.txt        # Python dependencies ki list
│   ├── .env                    # Environment variables (API keys, etc.)
│   └── config.py               # Configuration settings jaise API keys ya paths
└── README.md                   # Project ke baare mein documentation -->
