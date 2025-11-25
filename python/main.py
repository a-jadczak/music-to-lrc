from fastapi import FastAPI, WebSocket
from pathlib import Path
import asyncio
from api.http_routes import router as http_router
#from api.ws_routes import router as ws_router

app = FastAPI()

@app.get("/")
async def root():
  return {"message": "Backend is running!"}


app.include_router(http_router)