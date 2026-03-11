import { useState, useEffect } from 'react';
import { fetchTables } from '../services/tables';
import { fetchReservations } from '../services/reservation';
import type { Table, Reservation, Preference, Recommendation } from '../types/types';
import FloorPlan from '../components/FloorPlan/FloorPlan';
import ReservationLayout from '../components/ReservationLayout/ReservationLayout';
import { fetchRecommendations } from '../services/recommendations';
import RecommendationLayout from '../components/RecommendationLayout/RecommendationLayout';

export default function RestaurantView() {
  const [tables, setTables] = useState<Table[]>([]);
  const [reservations, setReservations] = useState<Reservation | null>(null);

  const [datetime, setDatetime] = useState<Date | null>(new Date());
  const [partySize, setPartySize] = useState<number>(1);
  const [preferences, setPreferences] = useState<Preference[] | null>(null);

  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [showRecommendationsLayout, setShowRecommendationsLayout] = useState<boolean>(false);

  // fetches table data from the backend API when the component mounts and updates the tables state with the fetched data
      useEffect(() => {
        (async () => {
          try {
            const data = await fetchTables();
            setTables(data);
          } catch (error) {
            console.error('Error fetching tables:', error);
          }
        })();
      }, []);
    
      // fetches reservation data from the backend API when the component mounts and updates the reservations state with the fetched data
    useEffect(() => {
      (async () => {
        try {
          const data = await fetchReservations(datetime);
          setReservations(data);
        } catch (error) {
          console.error('Error fetching reservations:', error);
        }
      })();
    }, [datetime]); // refetch reservations whenever the selected datetime changes

  async function handleRecommendations() {
    const data = await fetchRecommendations(datetime, partySize, preferences);

    if (data) {
      setRecommendations(data);
      setShowRecommendationsLayout(true);
    }
  }

  function goBack() {
    setShowRecommendationsLayout(false);
  }

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* floor plan on the left side of the screen */}
      <div style={{ flex: 2 }}>
        <FloorPlan 
          tables={tables} 
          reservations={reservations} 
          datetime={datetime} 
        />
      </div>

      <div style={{ flex: 1, backgroundColor: '#201f1f' }}>
      {showRecommendationsLayout ? (
        // layout for showing recommendatoins
        <RecommendationLayout
          recommendations={recommendations}
          tables={tables}
          onGoBack={goBack}  
        />
      ) : (
        // layout for getting recommendations
        <ReservationLayout
          datetime={datetime}
          setDatetime={setDatetime}
          partySize={partySize}
          setPartySize={setPartySize}
          preferences={preferences}
          setPreferences={setPreferences}
          onGetRecommendations={handleRecommendations}
        />
      )}
      </div>
    </div>
  );
}