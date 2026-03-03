import FloorPlan from '../components/FloorPlan/FloorPlan';
import ReservationLayout from '../components/ReservationLayout';

export default function RestaurantView() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div style={{ flex: 2 }}>
        <FloorPlan />
      </div>
      <div style={{ flex: 1, backgroundColor: '#201f1f' }}>
        <ReservationLayout />
      </div>
    </div>
  );
}
