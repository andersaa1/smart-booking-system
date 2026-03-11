import type { Recommendation, Table } from "../../types/types";
import CustomButton from "../CustomButton";

type Props = {
    recommendations: Recommendation[];
    tables: Table[];
    onGoBack: () => void;
};

export default function RecommendationLayout({ recommendations, tables, onGoBack }: Props) {
    console.log(tables)
    console.log(recommendations)
    return (
        <div>
            <div>
                <h1 className="title">Recommendations</h1>
            </div>

            <div>
                {recommendations.length === 0 ? (
                    <p>No suitable tables found for the selected time and party size.</p>
                ) : (
                    <div>
                        {recommendations.map((recommendation) => {
                            const table = tables.find((table) => table.id === recommendation.tableId);
                            return (
                            <div
                            key={recommendation.tableId}
                            className=""
                            >
                                <p>Zone: {table?.zone}</p>
                                <p>Table Group: {table?.tableGroup}</p>
                                <p>Total Seats: {table?.totalSeats}</p>
                                <p>Match Score: {recommendation.score}</p>
                            </div>
                            );
})}
                    </div>
                )}
            </div>
            <CustomButton label="Go Back" onClick={onGoBack}/>
        </div>
    );
}