def bytes_to_megabytes(size_bytes: int) -> float:
  """Convert bytes to megabytes."""
  return size_bytes / 1e6

def download_percent(downloaded: int, total_size: int) -> float:
  """Calculate download progress in percent."""
  return (downloaded / total_size) * 100 if total_size else 0.0