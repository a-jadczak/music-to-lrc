from app.constants.hf_repo import REPO, MODEL_FILE_NAME
from app.utils.sha import sha256_file
from app.helpers.path_helpers import get_model_path
from app.helpers.model_helpers import get_model_info, get_models

def get_models_name():
  faster_whisper_models = get_models()
  models = [m.modelId for m in faster_whisper_models if "faster-whisper" in m.modelId]

  for i in range(len(models)):
    models[i] = models[i].removeprefix(REPO)

  return models

def get_model_total_weight(model_name):
  info = get_model_info(model_name)
  total_size = sum(f.size for f in info.siblings)

  return total_size

def get_model_sha256(model_name):
  info = get_model_info(model_name)
  for file in info.siblings:
    if file.rfilename == MODEL_FILE_NAME:
      return file.lfs.sha256 
    
  return None

def is_model_installed(model_name):
  cache_path = get_model_path(model_name) 

  if not cache_path.exists():
    return False
  
  excepted_model_sha = get_model_sha256(model_name)
  saved_model_sha = sha256_file(cache_path)
  
  return excepted_model_sha == saved_model_sha
