from faster_whisper import WhisperModel
from schemas.transcription_config import TranscriptionConfig
from services.audio_processing.helpers.time import calculate_timestamp


# USER DATA FROM FRONT END:
# - model
# - device
# - language
# - beam_size
# - output_path

# - place in holders
# - include source files

# - audio files

def audio_to_lrc(audio_path: str, output_path: str, config: TranscriptionConfig):
  model = WhisperModel(config.model_path, device=config.device, compute_type="float32")

  segments, info = model.transcribe(audio_path, beam_size=config.beam_size, language=config.language, task="transcribe")

  with open(output_path, "w", encoding="utf-8") as f:
    for segment in segments:
      start = segment.start

      timestamp = calculate_timestamp(start)
      text = f"{timestamp}{segment.text.strip()}"

      f.write(f"{text}\n")
      print(f"{text}")
    
    print(f"LRC saved: {config.output_path}")