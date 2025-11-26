from fastapi import FastAPI, WebSocket
from pathlib import Path
import asyncio
from api.routes import models, cuda
#from api.ws_routes import router as ws_router

app = FastAPI()

@app.get("/")
async def root():
  return {"message": "Backend is running!"}


app.include_router(models.router)
app.include_router(cuda.router)