export async function fetchReservations() {
    try {
        const res = await fetch('/api/reservation');
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return [];
    }
}