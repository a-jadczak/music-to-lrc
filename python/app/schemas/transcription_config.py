from dataclasses import dataclass
from typing import Literal

@dataclass
class TranscriptionConfig:
  model_path: str
  device: Literal['cuda', 'cpu']
  language: str
  beam_size: int