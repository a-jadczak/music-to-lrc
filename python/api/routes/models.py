from fastapi import APIRouter
from api.routes.helpers.languages import code_to_name
from utils.download_utils import bytes_to_megabytes
from services.model_info.model_info import get_models_name, get_model_total_weight, is_model_installed as model_is_installed
from faster_whisper import WhisperModel

router = APIRouter(prefix="/models")

model_instance = WhisperModel("base")

@router.get("/")
def is_cuda_available():
  models = get_models_name()
  return {"author": "x", "models": models}

@router.get("/{model_name}/weight")
def get_model_weight(model_name: str):
  model_weight = bytes_to_megabytes(get_model_total_weight(model_name))
  return {"model": model_name, "weight": model_weight}

@router.get("/{model_name}/is-installed")
def is_model_installed(model_name: str):
  is_installed = model_is_installed(model_name)
  return {"model": model_name, "installed": is_installed}

@router.get("/supported-languages")
def get_model_languages():
  languages = model_instance.supported_languages
  languages_with_codes = [{c: code_to_name(c) } for c in languages]
  return languages_with_codes