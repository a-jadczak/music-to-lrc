import hashlib
from pathlib import Path

def sha256_file(file_path):
  if not Path.exists(file_path):
    return None 

  h = hashlib.sha256()
  with open(file_path, "rb") as f:
    for chunk in iter(lambda: f.read(8192), b""):
      h.update(chunk)

  return h.hexdigest()