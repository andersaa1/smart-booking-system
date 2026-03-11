import './RecommendationLayout.css';
import type { Zone } from '../../types/types';
import { zoneLabels } from '../../utils/zoneLabels';

type Props = {
  tableId: number;
  rank: number;
  zone: Zone;
  tableGroup: string;
  totalSeats: number;
  score: number;
  isSelected: boolean;
  isDimmed: boolean;
  onClick: () => void;
};

export default function RecommendationCard({
  zone,
  rank,
  tableGroup,
  totalSeats,
  score,
  isSelected,
  isDimmed,
  onClick,
}: Props) {
  return (
    <div
      className={`card ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}`}
      onClick={onClick}
    >
      <div className="tag">
        <div className="number">{rank}</div>
        <div className="score">score: {score}</div>
      </div>
      <div className="label-container">
        <div>
          Zone: <span className="card-label">{zoneLabels[zone]}</span>
        </div>
        <div>
          Table Group: <span className="card-label">{tableGroup}</span>
        </div>
        <div>
          Total Seats: <span className="card-label">{totalSeats}</span>
        </div>
      </div>
    </div>
  );
}
