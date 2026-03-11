import type { Recommendation, Table } from '../../types/types';
import CustomButton from '../CustomButton';
import RecommendationCard from './RecommendationCard';

type Props = {
  recommendations: Recommendation[];
  tables: Table[];
  onGoBack: () => void;
};

export default function RecommendationLayout({ recommendations, tables, onGoBack }: Props) {
  console.log(tables);
  console.log(recommendations);
  return (
    <div>
      <div>
        <h1 className="title">Recommendations</h1>
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

              return (
                <div key={recommendation.tableId}>
                  <RecommendationCard
                    rank={index + 1}
                    zone={table.zone}
                    tableGroup={table.tableGroup}
                    totalSeats={table.totalSeats}
                    score={recommendation.score}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <CustomButton label="Go Back" onClick={onGoBack} />
    </div>
  );
}
