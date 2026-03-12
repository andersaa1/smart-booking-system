import './ManualPickerLayout.css';
import type { Table } from '../../types/types';
import CustomButton from '../CustomButton';
import { zoneLabels } from '../../utils/zoneLabels';

type Props = {
  tables: Table[];
  selectedTableId: number | null;
  setSelectedTableId: (tableId: number | null) => void;
  onGoBack: () => void;
  onReserveTable: () => void;
};

export default function ManualPickerLayout({
  tables,
  selectedTableId,
  onGoBack,
  onReserveTable,
}: Props) {
  const selectedTable =
    selectedTableId !== null
      ? (tables.find((table) => table.id === selectedTableId) ?? null)
      : null;

  return (
    <div>
      <div>
        <h1 className="title">Pick a Table</h1>
      </div>

      <div className="card-wrapper">
        {selectedTable ? (
          <div className="cardContainer">
            <div className="card selected">
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
          <div className="instruction-large">
            Click on a table on the floor plan to choose a table.
          </div>
        )}
      </div>

      <div className="button-cluster-manual">
        <div className="button-top">
          <CustomButton
            label="Reserve Table"
            onClick={onReserveTable}
            disabled={selectedTableId === null}
          />
        </div>
        <div className="button-bottom">
          <CustomButton label="Go Back" onClick={onGoBack} />
        </div>
      </div>
    </div>
  );
}
