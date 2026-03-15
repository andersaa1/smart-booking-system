import type { Preference, Recommendation } from '../types/types';
import formatDatetime from '../utils/formatDatetime.ts';

const API_URL = 'http://localhost:8080';

type RecommendationBody = {
  datetime: string | null;
  partySize: number;
  preferences: Preference[] | null;
};

export async function fetchRecommendations(
  datetime: Date | null,
  partySize: number,
  preferences: Preference[] | null,
): Promise<Recommendation[] | null> {
  try {
    const body: RecommendationBody = {
      datetime: datetime ? formatDatetime(datetime) : null,
      partySize,
      preferences,
    };

    const res = await fetch(`${API_URL}/api/recommendations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return null;
  }
}
