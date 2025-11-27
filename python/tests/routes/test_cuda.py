from fastapi.testclient import TestClient
from app.main import app 

client = TestClient(app)

def test_is_cuda_available():
  response = client.get("/cuda")
  assert response.status_code == 200
  assert isinstance(response.json(), bool)