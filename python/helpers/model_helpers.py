from huggingface_hub import HfApi
from constants.hf_repo import REPO, AUTHOR

api = HfApi()

def get_repo_id(model_name: str) -> str:
  """Return the full repository ID for a given model."""
  return f"{REPO}{model_name}"

def get_model_info(model_name):
  repo_id = get_repo_id(model_name)
  return api.model_info(repo_id, files_metadata=True)

def get_models():
  return api.list_models(author=AUTHOR)