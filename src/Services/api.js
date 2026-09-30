const API_URL = "http://localhost:5000"; // backend server

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
}
