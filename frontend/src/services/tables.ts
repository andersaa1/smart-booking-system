export async function fetchTables() {
    try {
        const res = await fetch('/api/tables');
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