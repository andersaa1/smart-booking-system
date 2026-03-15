const API_URL = 'http://localhost:8080'

export async function fetchTables() {
  try {
    const res = await fetch(`${API_URL}/api/tables`);
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching tables:', error);
    return [];
  }
}
