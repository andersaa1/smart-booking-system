import type { Reservation } from '../types/types.ts';

function formatDatetime(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:00`;
}

export async function fetchReservations(dateTime: Date | null = null): Promise<Reservation | null> {
    try {
        let url = '/api/reservation';
        
        if (dateTime) {
            const formattedDateTime = formatDatetime(dateTime);
            url += `?datetime=${encodeURIComponent(formattedDateTime)}`;
        }

        console.log("fetchReservations URL:", url);

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return null;
    }
}