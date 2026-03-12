import './CreateReservationLayout.css';
import type { Table } from '../../types/types';
import CustomButton from '../CustomButton';
import TextField from './TextField';
import { zoneLabels } from '../../utils/zoneLabels';
import NumberField from '../ReservationLayout/NumberField';

type Props = {
  tables: Table[];
  datetime: Date | null; // shouldn't take null!
  selectedTableId: number | null; // shouldn't take null!
  name: string;
  email: string;
  partySize: number;
  setPartySize: (partySize: number) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  onChangeTable: () => void;
  onCreateReservation: () => void;
};

export default function CreateReservationLayout({
  tables,
  datetime,
  selectedTableId,
  name,
  email,
  partySize,
  setPartySize,
  setName,
  setEmail,
  onChangeTable,
  onCreateReservation,
}: Props) {
  const year = datetime?.getFullYear();
  const month = datetime?.getDate();
  const day = datetime?.getDay();
  const hour = datetime?.getHours();
  const minutes = datetime?.getMinutes();

  const selectedTable =
    selectedTableId !== null
      ? (tables.find((table) => table.id === selectedTableId) ?? null)
      : null;
  return (
    <div>
      <div className="title">
        <h1>Create a Reservation</h1>
      </div>

      <div className="label">
        Date & Time: {year}/{month}/{day} at {hour}:{minutes}
      </div>

      {selectedTable ? (
        <div className="card-preview-container">
          <div className="card-preview">
            <div className="label-conteiner">
              <div>
                Zone: <span className="card-label">{zoneLabels[selectedTable.zone]}</span>
              </div>
              <div>
                Table Group: <span className="card-label">{selectedTable.tableGroup}</span>
              </div>
              <div>
                Total Seats: <span className="card-label">{selectedTable.totalSeats}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="instruction-large">ERROR LOADING TABLE INFORMATION</div>
      )}

      <TextField label="Name" name={name} setName={setName} />
      <TextField label="Email" name={email} setName={setEmail} />
      <NumberField
        label="Confirm Your Party Size"
        maxNum={selectedTable ? selectedTable.totalSeats : 12}
        partySize={partySize}
        setPartySize={setPartySize}
      />

      <div className="button-cluster-reserve">
        <div className="button-top">
          <CustomButton
            label="Create Reservation"
            onClick={onCreateReservation}
            disabled={name === '' || email === ''}
          />
        </div>
        <div className="button-bottom">
          <CustomButton label="Choose Another Table" onClick={onChangeTable} />
        </div>
      </div>
    </div>
  );
}
