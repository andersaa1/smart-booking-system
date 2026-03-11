import './ReservationLayout.css';
import type { Preference } from '../../types/types';
import DateTimePicker from './DateTimePicker';
import NumberField from './NumberField';
import PreferencePicker from './PreferenePicker';
import CustomButton from '../CustomButton';

type Props = {
  datetime: Date | null;
  setDatetime: (date: Date | null) => void;
  partySize: number;
  setPartySize: (partySize: number) => void;
  preferences: Preference[] | null;
  setPreferences: (preferences: Preference[] | null) => void;
  onGetRecommendations: () => void;
  onChooseManually: () => void;
};

export default function ReservationLayout({
  datetime,
  setDatetime,
  partySize,
  setPartySize,
  preferences,
  setPreferences,
  onGetRecommendations,
  onChooseManually,
}: Props) {
  return (
    <div>
      <div>
        <h1 className="title">Get Table Recommendations</h1>
      </div>

      <div className="wrapper">
        <DateTimePicker datetime={datetime} setDatetime={setDatetime} />
        <NumberField partySize={partySize} setPartySize={setPartySize} />
        <PreferencePicker preferences={preferences} setPreferences={setPreferences} />
        <div className="button-cluster">
          <div className="button-top">
            <CustomButton label="Get Recommendations" onClick={onGetRecommendations} />
          </div>
          <div className="button-bottom">
            <CustomButton label="Choose a Table Manually" onClick={onChooseManually} />
          </div>
        </div>
      </div>
    </div>
  );
}
