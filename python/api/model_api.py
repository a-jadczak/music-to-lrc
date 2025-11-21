import os
from pathlib import Path
from huggingface_hub import HfApi
from constants.hf_repo import AUTHOR, REPO

api = HfApi()

def get_models_name():
  faster_whisper_models = api.list_models(author=AUTHOR)
  models = [m.modelId for m in faster_whisper_models if "faster-whisper" in m.modelId]

  for i in range(len(models)):
    models[i] = models[i].removeprefix(REPO)

  return models

def get_model_total_wage(model_name):
  repo_id = REPO + model_name
  info = api.model_info(repo_id, files_metadata=True)
  total_size = sum(f.size for f in info.siblings)
  return total_size

# TODO: Check if file exists when downloading process stopped
def is_model_installed(model_name):
  model_id = f"models--Systran--faster-whisper-{model_name}"
  cache_path = Path.home() / ".cache" / "huggingface" / "hub" / model_id / "snapshots"

  if not cache_path.exists():
    return False
  
  try:
    model_dir = next(os.scandir(cache_path)).path
  except:
    return False

  full_path = Path(model_dir) / "model.bin"
  return full_path.exists()