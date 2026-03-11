import type { Reservation } from '../types/types.ts';
import formatDatetime from '../utils/formatDatetime.ts';

export async function fetchReservations(dateTime: Date | null = null): Promise<Reservation | null> {
  try {
    let url = '/api/reservation';

    if (dateTime) {
      const formattedDateTime = formatDatetime(dateTime);
      url += `?datetime=${encodeURIComponent(formattedDateTime)}`;
    }

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
