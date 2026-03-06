import './ReservationLayout.css';
import DateTimePicker from './DateTimePicker';

type Props = {
  datetime: Date | null;
  setDatetime: (date: Date | null) => void;
}

export default function ReservationLayout({ datetime, setDatetime }: Props) {
  return (
    <div>
      <div>
        <h1 className='title'>Reserve a Table</h1>
      </div>

      <div className='wrapper'>
        <DateTimePicker datetime={datetime} setDatetime={setDatetime}/>
      </div>
    </div>
  );
}