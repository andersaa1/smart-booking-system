import type { Reservation } from '../types/types.ts';
import formatDatetime from '../utils/formatDatetime.ts';

type ReservationBody = {
  datetime: string;
  name: string;
  email: string;
  partySize: number;
  tableId: number;
};

function toLocalDateTimeString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

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

export async function fetchCreateReservation(
  datetime: Date,
  name: string,
  email: string,
  partySize: number,
  tableId: number,
): Promise<string | null> {
  try {
    const body: ReservationBody = {
      datetime: toLocalDateTimeString(datetime),
      name,
      email,
      partySize,
      tableId,
    };

    const res = await fetch('/api/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.text();

    return data;
  } catch (error) {
    console.error('Error creating reservation:', error);
    return null;
  }
}
