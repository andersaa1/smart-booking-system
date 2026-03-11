import type { Recommendation, Table } from '../../types/types';
import CustomButton from '../CustomButton';
import RecommendationCard from './RecommendationCard';

type Props = {
  recommendations: Recommendation[];
  tables: Table[];
  selectedTableId: number | null;
  onSelectTable: (tableId: number) => void;
  onGoBack: () => void;
  onReserveTable: () => void;
  onChooseManually: () => void;
};

export default function RecommendationLayout({
  recommendations,
  tables,
  selectedTableId,
  onSelectTable,
  onGoBack,
  onReserveTable,
  onChooseManually,
}: Props) {
  return (
    <div>
      <div>
        <h1 className="title">Recommendations</h1>
      </div>

      <div className="instruction">
        {selectedTableId === null ? 'Click on a recommendation to pick it' : ''}
      </div>

      <div>
        {recommendations.length === 0 ? (
          <p>No suitable tables found for the selected time and party size.</p>
        ) : (
          <div className="cardContainer">
            {recommendations.map((recommendation, index) => {
              const table = tables.find((table) => table.id === recommendation.tableId);

              if (!table) {
                return null;
              }

              const isSelected = selectedTableId === recommendation.tableId;
              const isDimmed =
                selectedTableId !== null && selectedTableId !== recommendation.tableId;

              return (
                <div key={recommendation.tableId}>
                  <RecommendationCard
                    tableId={recommendation.tableId}
                    rank={index + 1}
                    zone={table.zone}
                    tableGroup={table.tableGroup}
                    totalSeats={table.totalSeats}
                    score={recommendation.score}
                    isSelected={isSelected}
                    isDimmed={isDimmed}
                    onClick={() => onSelectTable(recommendation.tableId)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="button-cluster">
        <div className="button-row">
          <CustomButton label="Go Back" onClick={onGoBack} />
          <CustomButton
            label="Reserve Table"
            onClick={onReserveTable}
            disabled={selectedTableId === null}
          />
        </div>

        <div className="button-row-single">
          <CustomButton label="Choose a Table Manually" onClick={onChooseManually} />
        </div>
      </div>
    </div>
  );
}
