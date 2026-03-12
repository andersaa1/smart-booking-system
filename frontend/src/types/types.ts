import type { CSSProperties } from 'react';

export type LayoutScreen =
  | 'reservation'
  | 'recommendations'
  | 'manualPicker'
  | 'createReservation'
  | 'thankYou';

export type Zone =
  | 'MAIN'
  | 'QUIET'
  | 'SHOW'
  | 'LPRIVATE'
  | 'SPRIVATE'
  | 'STERRACE'
  | 'ETERRACE'
  | 'STAGE'
  | 'BAR'
  | 'Q-WC'
  | 'M-WC';

export type ZoneLayout = {
  id: Zone;
  label?: string;
  column: number;
  row: number;
  width: number;
  height: number;
  style: CSSProperties;
  labelStyle?: CSSProperties;
};

export type Preference = 'WINDOW' | 'BATHROOM' | 'PRIVATE' | 'STAGE' | 'SHADE';

export type Layout = {
  col: number;
  row: number;
  width: number;
  height: number;
};

export type Table = {
  id: number;
  zone: Zone;
  tableGroup: string;
  totalSeats: number;
  preferences: Preference[];
  layout: Layout;
};

export type Reservation = {
  datetime: string;
  reservedTableIds: number[];
};

export type Recommendation = {
  tableId: number;
  score: number;
};
