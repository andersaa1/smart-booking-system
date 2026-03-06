import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    datetime: Date | null;
    setDatetime: (date: Date | null) => void;
}

export default function DateTimePicker({ datetime, setDatetime }: Props) {
    return (
        <div className='input-container'>
                <label className='label' htmlFor="datetime">Date & Time</label>
                <DatePicker
                  id="datetime"
                  selected={datetime}
                  onChange={(date: Date | null) => setDatetime(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
        
                  minDate={new Date()} // can't select past dates
                  minTime={new Date(0,0,0,10,0)} // can't select times before 10:00
                  maxTime={new Date(0,0,0,22,0)} // can't select times after 22:00
                  timeIntervals={30}
        
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className='datetime-picker'
                />
        </div>
    );
}