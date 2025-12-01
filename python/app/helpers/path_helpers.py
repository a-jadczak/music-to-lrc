from pathlib import Path
from constants.hf_repo import CACHE_BASE, AUTHOR, MODEL_FILE_NAME

def get_model_dir(model_name: str) -> Path:
  """Return the path to the temp snapshot folder for a given model."""
  model_id = f"models--{AUTHOR}--faster-whisper-{model_name}"
  return CACHE_BASE / model_id / "snapshots" / "temp_snapshot"

def get_model_path(model_name: str) -> Path:
  """Return the path to the temp snapshot folder for a given model."""
  model_id = f"models--{AUTHOR}--faster-whisper-{model_name}"
  return CACHE_BASE / model_id / "snapshots" / "temp_snapshot" / MODEL_FILE_NAME