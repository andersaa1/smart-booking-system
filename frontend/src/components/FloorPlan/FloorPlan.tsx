import { useEffect, useState } from 'react';
import type { Reservation, Table } from '../../types/types.ts';
import './FloorPlan.css';
import { zones } from './zones.ts';
import { fetchTables } from '../../services/tables.ts';
import { fetchReservations } from '../../services/reservation.ts';

type Props = {
  datetime: Date | null;
}

export default function FloorPlan({ datetime }: Props) {
  const GRID_SIZE_Y: number = 27; // row count
  const GRID_SIZE_X: number = 25; // column count
  const CELL_SIZE: number = 30; // size of each cell in pixels

  const WIDTH: number = GRID_SIZE_X * CELL_SIZE; // normalized width of the grid in pixels
  const HEIGHT: number = GRID_SIZE_Y * CELL_SIZE; // normalized height of the grid in pixels

  const [tables, setTables] = useState<Table[]>([]);
  const [reservations, setReservations] = useState<Reservation | null>(null);

  // fetches table data from the backend API when the component mounts and updates the tables state with the fetched data
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchTables();
        setTables(data);
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    })();
  }, []);

  // fetches reservation data from the backend API when the component mounts and updates the reservations state with the fetched data
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchReservations(datetime);
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    })();
  }, [datetime]); // refetch reservations whenever the selected datetime changes

  return (
    <div>
      <div>
        <h1>Seaside Grill & Chill</h1>
      </div>

      <div className="wrapper">
        <div
          className="grid"
          style={{
            width: WIDTH,
            height: HEIGHT,
            gridTemplateColumns: `repeat(${GRID_SIZE_X}, ${CELL_SIZE}px)`, // creates a grid with GRID_SIZE_X columns, each CELL_SIZE pixels wide
            gridTemplateRows: `repeat(${GRID_SIZE_Y}, ${CELL_SIZE}px)`, // creates a grid with GRID_SIZE_Y rows, each CELL_SIZE pixels tall
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`, // sets the size of the background grid lines to match the cell size
          }}
        >
          {/* renders each zone as a div with appropriate styling and positioning based on the zones array */}
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="zone"
              style={{
                gridColumn: `${zone.column} / span ${zone.width}`,
                gridRow: `${zone.row} / span ${zone.height}`,
                ...zone.style,
              }}
            >
              <div className="zoneLabel" style={zone.labelStyle}>
                {zone.label}
              </div>
            </div>
          ))}
          {/* renders each table as a div with appropriate styling and positioning based on the tables state */}
          {tables.map((table) => (
            <div
              key={table.id} // unique key for each table based on its zone and group
              className={`table ${reservations?.reservedTableIds?.includes(table.id) ? "reserved" : ""}`}
              style={{
                gridColumn: `${table.layout.col} / span ${table.layout.width}`,
                gridRow: `${table.layout.row} / span ${table.layout.height}`,
              }}
            >
              {table.tableGroup}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}