import './FloorPlan.css';
import { zones } from './zones.ts';

export default function FloorPlan() {
  const GRID_SIZE_Y: number = 27; // row count
  const GRID_SIZE_X: number = 25; // column count
  const CELL_SIZE: number = 30; // size of each cell in pixels

  const WIDTH: number = GRID_SIZE_X * CELL_SIZE; // normalized width of the grid in pixels
  const HEIGHT: number = GRID_SIZE_Y * CELL_SIZE; // normalized height of the grid in pixels

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
        </div>
      </div>
    </div>
  );
}
