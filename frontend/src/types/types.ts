import type { CSSProperties } from 'react';

export type Zone =
  | 'MAIN'
  | 'QUIET'
  | 'SHOW'
  | 'L-PRIVATE'
  | 'S-PRIVATE'
  | 'TERRACE-S'
  | 'TERRACE-E'
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

export type Preference = 'NONE' | 'WINDOW' | 'BATHROOM' | 'PRIVATE' | 'STAGE' | 'SHADE';

export type Layout = {
  col: number;
  row: number;
  width: number;
  height: number;
}

export type Table = {
  zone: Zone;
  tableGroup: string;
  totalSeats: number;
  preferences: Preference[];
  layout: Layout;
};

export type Availability = {
  table: Table;
  available: boolean;
  unavailableMinutes: number;
};

export type Recommendation = {
  table: Table;
  score: number;
};
