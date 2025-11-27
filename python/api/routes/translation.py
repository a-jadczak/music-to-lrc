from fastapi import APIRouter
from api.routes.helpers.languages import code_to_name
from faster_whisper import WhisperModel

router = APIRouter(prefix="/translation")

model_instance = WhisperModel("base")

@router.get("/supported-languages")
def get_model_languages():
  languages = model_instance.supported_languages
  languages_with_codes = [{c: code_to_name(c)} for c in languages if code_to_name(c)]

  return languages_with_codes