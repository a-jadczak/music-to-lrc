import hashlib
from pathlib import Path

def sha256_file(file_path):
  if not Path.exists(file_path):
    return None 

  h = hashlib.sha256()
  chunk_size = 1024 * 1024 # 1 MB
  with open(file_path, "rb") as f:
    for chunk in iter(lambda: f.read(chunk_size), b""):
      h.update(chunk)

  return h.hexdigest()