# Rectify Resume

A web-based resume editor with AI-powered section enhancement using React + FastAPI.

## Setup Instructions

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Access frontend at `http://localhost:5173`
Backend at `http://localhost:8000`

---

- Upload and parse resume (mocked)
- Edit resume sections
- AI-enhance sections (mock)
- Save to backend
- Download as JSON
