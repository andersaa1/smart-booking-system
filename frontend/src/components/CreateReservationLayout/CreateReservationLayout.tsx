import CustomButton from '../CustomButton';

type Props = {
  selectedTableId: number | null;
  onChangeTable: () => void;
  onCreateReservation: () => void;
};

export default function CreateReservationLayout({ onChangeTable, onCreateReservation }: Props) {
  return (
    <div>
      <div>
        <h1>Create a Reservation</h1>
      </div>

      <div className="button-cluster">
        <div className="button-top">
          <CustomButton label="Create Reservation" onClick={onCreateReservation} />
        </div>
        <div className="button-bottom">
          <CustomButton label="Choose Another Table" onClick={onChangeTable} />
        </div>
      </div>
    </div>
  );
}
