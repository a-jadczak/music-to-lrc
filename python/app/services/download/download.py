import json
import requests
from huggingface_hub import hf_hub_url
from constants.hf_repo import MODEL_FILE_NAME
from helpers.path_helpers import get_model_dir
from helpers.model_helpers import get_model_info, get_repo_id
from utils.download_utils import bytes_to_megabytes, download_percent
from fastapi import WebSocket

def push_to_end(list, name):
  """Pushes a specific element to the end of a list"""
  other_files = [f for f in list if f.rfilename != name]
  model_file = [f for f in list if f.rfilename == name]

  return other_files + model_file

def save_files(full_path: str, resp):
  with open(full_path, "wb") as fd:
    for chunk in resp.iter_content(chunk_size=1024 * 1024):
      if chunk:
        fd.write(chunk)
        yield chunk

async def download_model(f, download_progress, snapshot_dir, repo_id, total_size, websocket: WebSocket):
  full_path = snapshot_dir / f.rfilename
  full_path.parent.mkdir(parents=True, exist_ok=True)

  # File URL
  file_url = hf_hub_url(repo_id, f.rfilename)

  # Downloading in chunks
  resp = requests.get(file_url, stream=True)
  resp.raise_for_status()

  for chunk in save_files(full_path, resp):
    download_progress += len(chunk)
    print("\n"+str(download_progress))

    downloaded_megabytes = bytes_to_megabytes(download_progress)
    total_megabytes = bytes_to_megabytes(total_size)
    percent = download_percent(download_progress, total_size)

    print(f"\rDownloading {f.rfilename}: {percent:.2f}% ({downloaded_megabytes:.2f}/{total_megabytes:.2f} MB)", end="")
    await websocket.send_text(json.dumps({"status": "progress", "percent": percent}))

  return download_progress

async def download_hf_repo_to_cache(model_name, websocket: WebSocket):
  info = get_model_info(model_name)
  repo_id = get_repo_id(model_name)

  snapshot_dir = get_model_dir(model_name)
  snapshot_dir.mkdir(parents=True, exist_ok=True)

  # Sums the sizes of the downloading files
  download_progress = 0
  total_size = sum(f.size for f in info.siblings)

  # Push the largest file (model.bin) to the end of the download queue for proper validation.
  file_queue = push_to_end(info.siblings, MODEL_FILE_NAME)

  for file in file_queue:
    download_progress = await download_model(file, download_progress, snapshot_dir, repo_id, total_size, websocket)

  print("\nDownload complete!")
  await websocket.send_text(json.dumps({"status": "complete"}))
