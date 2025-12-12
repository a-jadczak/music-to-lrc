import json
from fastapi import APIRouter, WebSocket
from services.download.download import download_hf_repo_to_cache

router = APIRouter(prefix="/ws")

@router.websocket("/download/{model_name}")
async def ws_download(websocket: WebSocket, model_name: str):
  await websocket.accept()
  await websocket.send_text(json.dumps({"status":"start"}))

  try:
    await download_hf_repo_to_cache(model_name, websocket)
  except Exception as e:
    await websocket.send_text(json.dumps({"status": "error", "message": str(e)}))