from fastapi import FastAPI, WebSocket
from pathlib import Path
import asyncio
from fastapi.middleware.cors import CORSMiddleware
from api.routes import models, cuda, translation
#from api.ws_routes import router as ws_router

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
app.include_router(translation.router)
app.include_router(cuda.router)