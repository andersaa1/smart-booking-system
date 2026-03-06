import { useState } from 'react';
import FloorPlan from '../components/FloorPlan/FloorPlan';
import ReservationLayout from '../components/ReservationLayout/ReservationLayout';

export default function RestaurantView() {
  const [datetime, setDatetime] = useState<Date | null>(new Date());

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* floor plan on the left side of the screen */}
      <div style={{ flex: 2 }}>
        <FloorPlan datetime={datetime}/>
      </div>

      {/* reservation layout on the right side of the screen */}
      <div style={{ flex: 1, backgroundColor: '#201f1f' }}>
        <ReservationLayout datetime={datetime} setDatetime={setDatetime}/>
      </div>
    </div>
  );
}