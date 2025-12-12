from fastapi import FastAPI, WebSocket
from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware
from api.routes import models, cuda, transcription
from api.websocket import ws_routes

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/")
async def root():
  return {"message": "Backend is running!"}


app.include_router(models.router)
app.include_router(transcription.router)
app.include_router(cuda.router)
app.include_router(ws_routes.router)