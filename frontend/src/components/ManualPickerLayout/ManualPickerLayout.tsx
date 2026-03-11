import type { Table } from '../../types/types';
import CustomButton from '../CustomButton';

type Props = {
  tables: Table[];
  selectedTableId: number | null;
  setSelectedTableId: (tableId: number | null) => void;
  onGoBack: () => void;
  onReserveTable: () => void;
};

export default function ManualPickerLayout({ onGoBack, onReserveTable }: Props) {
  return (
    <div>
      <div>
        <h1>Pick a Table</h1>
      </div>

      <div className="button-cluster">
        <div className="button-top">
          <CustomButton label="Reserve Table" onClick={onReserveTable} />
        </div>
        <div className="button-bottom">
          <CustomButton label="Go Back" onClick={onGoBack} />
        </div>
      </div>
    </div>
  );
}
