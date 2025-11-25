from fastapi import APIRouter
from utils.download_utils import bytes_to_megabytes
from services.model_info.model_info import get_models_name, get_model_total_weight, is_model_installed as model_is_installed

router = APIRouter()

# example
@router.get("/status")
def status():
  return {"status": "ok"}

@router.get("/models")
def get_models():
  models = get_models_name()
  return {"author": "x", "models": models}

@router.get("/models/{model_name}/weight")
def get_model_weight(model_name: str):
  model_weight = bytes_to_megabytes(get_model_total_weight(model_name))
  return {"model": model_name, "weight": model_weight}

@router.get("/models/{model_name}/is-installed")
def is_model_installed(model_name: str):
  is_installed = model_is_installed(model_name)
  return {"model": model_name, "installed": is_installed}