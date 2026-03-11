import type { Recommendation, Table } from '../../types/types';
import CustomButton from '../CustomButton';
import RecommendationCard from './RecommendationCard';

type Props = {
  recommendations: Recommendation[];
  tables: Table[];
  selectedTableId: number | null;
  setSelectedTableId: (tableId: number | null) => void;
  onGoBack: () => void;
};

export default function RecommendationLayout({
  recommendations,
  tables,
  selectedTableId,
  setSelectedTableId,
  onGoBack,
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
                    onClick={() => setSelectedTableId(isSelected ? null : recommendation.tableId)}
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
            onClick={onGoBack}
            disabled={selectedTableId === null}
          />
        </div>

        <div className="button-row-single">
          <CustomButton label="Choose a Table Manually" onClick={onGoBack} />
        </div>
      </div>
    </div>
  );
}
