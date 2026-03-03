import type { ZoneLayout } from '../../types.ts';

export const zones: ZoneLayout[] = [
    { id: 'MAIN', label: "MAIN ROOM", column: 4, row: 9, width: 11, height: 8, 
        style: { backgroundColor: '#4db8ff', border: `2px solid black` }, 
        labelStyle: { paddingTop: 16 } 
    },
    { id: 'QUIET', label: "QUIET ROOM", column: 4, row: 17, width: 11, height: 8, 
        style: { backgroundColor: '#f26464', borderBottom: `2px solid black`, borderLeft: `2px solid black`, borderRight: `2px solid black` }, 
        labelStyle: { paddingTop: 16, textShadow: '1px 1px 1px black' } 
    },
    { id: 'SHOW', label: "SHOW ROOM", column: 15, row: 9, width: 9, height: 8, 
        style: { backgroundColor: '#85f264', alignItems: 'center', borderTop: `2px solid black`, borderBottom: `2px solid black`, borderRight: `2px solid black` }, 
    },
    { id: 'L-PRIVATE', label: "L PRIVATE", column: 7, row: 1, width: 4, height: 8, 
        style: { backgroundColor: '#5d4daa', borderTop: `2px solid black`, borderLeft: `2px solid black`, borderRight: `2px solid black` }, 
    },
    { id: 'S-PRIVATE', label: "S PRIVATE", column: 11, row: 3, width: 4, height: 6, 
        style: { backgroundColor: 'rgb(134, 118, 212)', borderTop: `2px solid black`, borderRight: `2px solid black` },
    },
    { id: 'TERRACE-S', label: "TERRACE", column: 4, row: 25, width: 11, height: 3, 
        style: { backgroundColor: '#ff9028', borderLeft: `2px solid black`, borderBottom: `2px solid black`, borderBottomLeftRadius: 100 }, 
        labelStyle: { paddingLeft: 345, paddingTop: 165, transform: 'rotate(-45deg)' } 
    },
    { id: 'TERRACE-E', column: 15, row: 17, width: 3, height: 11, 
        style: { backgroundColor: '#ff9028', borderRight: `2px solid black`, borderBottom: `2px solid black`, borderBottomRightRadius: 100 },
    },
    { id: 'STAGE', label: "STAGE", column: 24, row: 10, width: 2, height: 6, 
        style: { backgroundColor: '#f873f4', alignItems: 'center', borderTop: `2px solid black`, borderBottom: `2px solid black`, borderRight: `2px solid black`, borderTopRightRadius: 35, borderBottomRightRadius: 35 }, 
        labelStyle: { transform: 'rotate(90deg)' } 
    },
    { id: 'BAR', label: "BAR", column: 2, row: 18, width: 2, height: 4, 
        style: { backgroundColor: '#ff0090', alignItems: 'center', borderTop: `2px solid black`, borderBottom: `2px solid black`, borderLeft: `2px solid black`, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }, 
        labelStyle: { transform: 'rotate(-90deg)' } 
    },
    { id: 'Q-WC', label: "WC", column: 1, row: 23, width: 3, height: 2, 
        style: { backgroundColor: '#c0c0c0', alignItems: 'center', borderTop: `2px solid black`, borderBottom: `2px solid black`, borderLeft: `2px solid black`, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }, 
        labelStyle: { transform: 'rotate(-90deg)' } 
    },
    { id: 'M-WC', label: "WC", column: 4, row: 6, width: 2, height: 3, 
        style: { backgroundColor: '#c0c0c0', alignItems: 'center', borderTop: `2px solid black`, borderLeft: `2px solid black`, borderRight: `2px solid black`, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
    },
];