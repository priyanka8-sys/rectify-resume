from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class EnhanceRequest(BaseModel):
    section: str
    content: str

@app.post("/ai-enhance")
def enhance(req: EnhanceRequest):
    return {"improved_content": f"[Enhanced] {req.content}"}

@app.post("/save-resume")
def save_resume(resume: dict):
    with open("resume_data.json", "w") as f:
        json.dump(resume, f)
    return {"status": "success"}

@app.get("/download-resume")
def download():
    with open("resume_data.json") as f:
        return json.load(f)
