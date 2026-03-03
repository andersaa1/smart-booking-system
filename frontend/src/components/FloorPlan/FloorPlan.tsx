import './FloorPlan.css';

export default function FloorPlan() {
  const GRID_SIZE_Y: number = 27;
  const GRID_SIZE_X: number = 25;
  const CELL_SIZE: number = 30;

  const WIDTH: number = GRID_SIZE_X * CELL_SIZE;
  const HEIGHT: number = GRID_SIZE_Y * CELL_SIZE;

  const ZONE_BORDER_SIZE: number = 2;

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
            gridTemplateColumns: `repeat(${GRID_SIZE_X}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE_Y}, ${CELL_SIZE}px)`,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
        >
          {/* Main Room */}
          <div
            className="zone"
            style={{
              gridColumn: '4 / span 11',
              gridRow: '9 / span 8',
              backgroundColor: '#4db8ff',
              border: `${ZONE_BORDER_SIZE}px solid black`,
            }}
          >
            <div className="zoneLabel" style={{ paddingTop: 16 }}>
              MAIN ROOM
            </div>
          </div>

          {/* Quiet Room */}
          <div
            className="zone"
            style={{
              gridColumn: '4 / span 11',
              gridRow: '17 / span 8',
              backgroundColor: '#f26464',
              borderBottom: `${ZONE_BORDER_SIZE}px solid black`,
              borderLeft: `${ZONE_BORDER_SIZE}px solid black`,
              borderRight: `${ZONE_BORDER_SIZE}px solid black`,
            }}
          >
            <div className="zoneLabel" style={{ paddingTop: 16, textShadow: '1px 1px 1px black' }}>
              QUIET ROOM
            </div>
          </div>

          {/* Show Room */}
          <div
            className="zone"
            style={{
              gridColumn: '15 / span 9',
              gridRow: '9 / span 8',
              backgroundColor: '#85f264',
              alignItems: 'center',
              borderTop: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottom: `${ZONE_BORDER_SIZE}px solid black`,
              borderRight: `${ZONE_BORDER_SIZE}px solid black`,
            }}
          >
            <div className="zoneLabel">SHOW ROOM</div>
          </div>

          {/* Terrace */}
          {/* Terrace East Section */}
          <div
            className="zone"
            style={{
              gridColumn: '15 / span 3',
              gridRow: '17 / span 11',
              backgroundColor: '#ff9028',
              borderRight: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottom: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottomRightRadius: 100,
            }}
          ></div>
          {/* Terrace South Section */}
          <div
            className="zone"
            style={{
              gridColumn: '4 / span 11',
              gridRow: '25 / span 3',
              backgroundColor: '#ff9028',
              borderLeft: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottom: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottomLeftRadius: 100,
            }}
          >
            <div
              className="zoneLabel"
              style={{ paddingLeft: 345, paddingTop: 165, transform: 'rotate(-45deg)' }}
            >
              TERRACE
            </div>
          </div>

          {/* Private Rooms */}
          {/* Large Private Room */}
          <div
            className="zone"
            style={{
              gridColumn: '7 / span 4',
              gridRow: '1 / span 8',
              backgroundColor: '#5d4daa',
              borderTop: `${ZONE_BORDER_SIZE}px solid black`,
              borderLeft: `${ZONE_BORDER_SIZE}px solid black`,
              borderRight: `${ZONE_BORDER_SIZE}px solid black`,
            }}
          >
            <div className="zoneLabel">L PRIVATE</div>
          </div>
          {/* Small Private Room */}
          <div
            className="zone"
            style={{
              gridColumn: '11 / span 4',
              gridRow: '3 / span 6',
              backgroundColor: 'rgb(134, 118, 212)',
              borderTop: `${ZONE_BORDER_SIZE}px solid black`,
              borderRight: `${ZONE_BORDER_SIZE}px solid black`,
            }}
          >
            <div className="zoneLabel">S PRIVATE</div>
          </div>

          {/* Other Rooms and Objects */}
          {/* Main Room Bathroom */}
          <div
            className="zone"
            style={{
              gridColumn: '4 / span 2',
              gridRow: '6 / span 3',
              backgroundColor: '#c0c0c0',
              alignItems: 'center',
              borderTop: `${ZONE_BORDER_SIZE}px solid black`,
              borderLeft: `${ZONE_BORDER_SIZE}px solid black`,
              borderRight: `${ZONE_BORDER_SIZE}px solid black`,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <div className="zoneLabel">WC</div>
          </div>

          {/* Quiet Room Bathroom */}
          <div
            className="zone"
            style={{
              gridColumn: '1 / span 3',
              gridRow: '23 / span 2',
              backgroundColor: '#c0c0c0',
              alignItems: 'center',
              borderTop: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottom: `${ZONE_BORDER_SIZE}px solid black`,
              borderLeft: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <div className="zoneLabel" style={{ transform: 'rotate(-90deg)' }}>
              WC
            </div>
          </div>

          {/* Bar */}
          <div
            className="zone"
            style={{
              gridColumn: '2 / span 2',
              gridRow: '18 / span 4',
              backgroundColor: '#ff0090',
              alignItems: 'center',
              borderTop: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottom: `${ZONE_BORDER_SIZE}px solid black`,
              borderLeft: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <div className="zoneLabel" style={{ transform: 'rotate(-90deg)' }}>
              BAR
            </div>
          </div>

          {/* Stage */}
          <div
            className="zone"
            style={{
              gridColumn: '24 / span 2',
              gridRow: '10 / span 6',
              backgroundColor: '#f873f4',
              alignItems: 'center',
              borderTop: `${ZONE_BORDER_SIZE}px solid black`,
              borderBottom: `${ZONE_BORDER_SIZE}px solid black`,
              borderRight: `${ZONE_BORDER_SIZE}px solid black`,
              borderTopRightRadius: 35,
              borderBottomRightRadius: 35,
            }}
          >
            <div className="zoneLabel" style={{ transform: 'rotate(90deg)' }}>
              STAGE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}