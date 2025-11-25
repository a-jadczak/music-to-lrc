from fastapi import FastAPI, WebSocket
from pathlib import Path
import asyncio

app = FastAPI()

@app.get("/")
async def root():
  return {"message": "Backend is running!"}