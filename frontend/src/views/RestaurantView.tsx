import { useState, useEffect } from 'react';
import { fetchTables } from '../services/tables';
import { fetchCreateReservation, fetchReservations } from '../services/reservation';
import type { LayoutScreen, Table, Reservation, Preference, Recommendation } from '../types/types';
import FloorPlan from '../components/FloorPlan/FloorPlan';
import ReservationLayout from '../components/ReservationLayout/ReservationLayout';
import { fetchRecommendations } from '../services/recommendations';
import RecommendationLayout from '../components/RecommendationLayout/RecommendationLayout';
import ManualPickerLayout from '../components/ManualPickerLayout/ManualPickerLayout';
import CreateReservationLayout from '../components/CreateReservationLayout/CreateReservationLayout';
import ThankYouLayout from '../components/ThankYouLayout/ThankYouLayout';

export default function RestaurantView() {
  // navigational states
  const [currentView, setCurrentView] = useState<LayoutScreen>('reservation');
  const [returnView, setReturnView] = useState<
    'reservation' | 'recommendations' | 'manualPicker' | null
  >(null);

  // floor plan table states
  const [tables, setTables] = useState<Table[]>([]);
  const [reservations, setReservations] = useState<Reservation | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedTableId, setSelectedTableId] = useState<number | null>(null);
  const [showRecommendationHighlights, setShowRecommendationHighlights] = useState(false);
  const [showSelectedHighlight, setShowSelectedHighlight] = useState(false);

  // reservation data
  const [datetime, setDatetime] = useState<Date | null>(new Date());
  const [partySize, setPartySize] = useState<number>(1);
  const [preferences, setPreferences] = useState<Preference[] | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

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

  // handlers
  function handleSelectTable(tableId: number) {
    if (selectedTableId === tableId) {
      setSelectedTableId(null);
      setShowSelectedHighlight(false);
      return;
    }

    setSelectedTableId(tableId);
    setShowSelectedHighlight(true);
  }

  // navigational handlers
  // fetches recommendations + ReservationLayout -> RecommendationLayout
  async function handleRecommendations() {
    const data = await fetchRecommendations(datetime, partySize, preferences);

    if (data) {
      setRecommendations(data);
      setSelectedTableId(null);
      setShowRecommendationHighlights(true);
      setShowSelectedHighlight(false);
      setCurrentView('recommendations');
    }
  }

  // creates reservation + CreateReservationLayout -> ThankYouLayout
  async function handleThanksFromCreateReservation() {
    if (datetime && selectedTableId) {
      const data = await fetchCreateReservation(datetime, name, email, partySize, selectedTableId);

      if (data) {
        setSelectedTableId(null);
        setShowRecommendationHighlights(false);
        setShowSelectedHighlight(false);
        setCurrentView('thankYou');
      }

      try {
        const data = await fetchReservations(datetime);
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    }
  }

  // ReservationLayout -> ManualPickerLayout
  function handleManualFromReservation() {
    setSelectedTableId(null);
    setShowRecommendationHighlights(false);
    setShowSelectedHighlight(false);
    setReturnView('reservation');
    setCurrentView('manualPicker');
  }

  // RecommendationLayoout -> ManualPickerLayout
  function handleManualFromRecommendations() {
    setSelectedTableId(null);
    setShowRecommendationHighlights(false);
    setShowSelectedHighlight(false);
    setReturnView('recommendations');
    setCurrentView('manualPicker');
  }

  // RecommendationLayout -> ReservationLayout
  function handleReservationFromRecommendations() {
    setSelectedTableId(null);
    setShowRecommendationHighlights(false);
    setShowSelectedHighlight(false);
    setCurrentView('reservation');
  }

  // RecommendationLayout -> CreateReservationLayout
  function handleCreateReservationFromRecommendations() {
    setShowRecommendationHighlights(false);
    setShowSelectedHighlight(true);
    setReturnView('recommendations');
    setCurrentView('createReservation');
  }

  // ManualPickerLayout -> RecommendationLayout OR ReservationLayout
  function handleBackFromManual() {
    if (returnView === 'recommendations') {
      setSelectedTableId(null);
      setShowRecommendationHighlights(true);
      setShowSelectedHighlight(false);
      setCurrentView('recommendations');
      return;
    }
    setSelectedTableId(null);
    setShowRecommendationHighlights(false);
    setShowSelectedHighlight(false);
    setCurrentView('reservation');
  }

  // ManualPickerLayout -> CreateReservationLayout
  function handleCreateReservationfromManual() {
    setShowRecommendationHighlights(false);
    setShowSelectedHighlight(true);
    setReturnView('manualPicker');
    setCurrentView('createReservation');
  }

  // CreateReservationLayout -> RecommendationLayout OR ManualPickerLayout
  function handleBackFromCreateReservation() {
    if (returnView === 'recommendations') {
      setSelectedTableId(null);
      setShowRecommendationHighlights(true);
      setShowSelectedHighlight(false);
      setCurrentView('recommendations');
      return;
    }
    setSelectedTableId(null);
    setShowSelectedHighlight(false);
    setCurrentView('manualPicker');
    return;
  }

  // ThankYouLayout -> ReservationLayout
  function handleReservationFromThanks() {
    setSelectedTableId(null);
    setRecommendations([]);
    setShowRecommendationHighlights(false);
    setShowSelectedHighlight(false);
    setName('');
    setEmail('');
    setCurrentView('reservation');
  }

  // switches between layout panels
  function switchLayout() {
    switch (currentView) {
      case 'reservation':
        return (
          <ReservationLayout
            datetime={datetime}
            setDatetime={setDatetime}
            partySize={partySize}
            setPartySize={setPartySize}
            preferences={preferences}
            setPreferences={setPreferences}
            onGetRecommendations={handleRecommendations}
            onChooseManually={handleManualFromReservation}
          />
        );

      case 'recommendations':
        return (
          <RecommendationLayout
            recommendations={recommendations}
            tables={tables}
            selectedTableId={selectedTableId}
            onSelectTable={handleSelectTable}
            onGoBack={handleReservationFromRecommendations}
            onReserveTable={handleCreateReservationFromRecommendations}
            onChooseManually={handleManualFromRecommendations}
          />
        );

      case 'manualPicker':
        return (
          <ManualPickerLayout
            tables={tables}
            selectedTableId={selectedTableId}
            setSelectedTableId={setSelectedTableId}
            onGoBack={handleBackFromManual}
            onReserveTable={handleCreateReservationfromManual}
          />
        );

      case 'createReservation':
        return (
          <CreateReservationLayout
            datetime={datetime}
            tables={tables}
            selectedTableId={selectedTableId}
            name={name}
            email={email}
            partySize={partySize}
            setPartySize={setPartySize}
            setName={setName}
            setEmail={setEmail}
            onChangeTable={handleBackFromCreateReservation}
            onCreateReservation={handleThanksFromCreateReservation}
          />
        );

      case 'thankYou':
        return <ThankYouLayout onHome={handleReservationFromThanks} />;

      default:
        return null;
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* floor plan on the left side of the screen */}
      <div style={{ flex: 2 }}>
        <FloorPlan
          tables={tables}
          reservations={reservations}
          datetime={datetime}
          recommendations={recommendations}
          selectedTableId={selectedTableId}
          showRecommendationHighlights={showRecommendationHighlights}
          showSelectedHighlight={showSelectedHighlight}
          isManualMode={currentView === 'manualPicker'}
          onTableClick={handleSelectTable}
        />
      </div>

      <div style={{ flex: 1, backgroundColor: '#201f1f' }}>{switchLayout()}</div>
    </div>
  );
}
