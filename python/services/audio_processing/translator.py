from faster_whisper import WhisperModel
import torch

model_path = ""

def audio_to_lrc(audio_path: str, output_path: str):
  device = "cuda" if torch.cuda.is_available() else "cpu"
  print("h")
  model = WhisperModel(model_path, device=device, compute_type="float32")
  print("s")

  segments, info = model.transcribe(audio_path, beam_size=5, language="en", task="transcribe")
  print("v")

  with open(output_path, "w", encoding="utf-8") as f:
    for segment in segments:
      start = segment.start
      minutes = int(start // 60)
      seconds = int(start % 60)
      hundredths = int((start - int(start)) * 100)
      timestamp = f"[{minutes:02d}:{seconds:02d}.{hundredths:02d}]"
      f.write(f"{timestamp}{segment.text.strip()}\n")
      print(f"{timestamp}{segment.text.strip()}")
    
    print(f"LRC saved: {output_path}")