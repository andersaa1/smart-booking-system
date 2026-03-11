import type { Zone } from '../types/types';

export const zoneLabels: Partial<Record<Zone, string>> = {
  MAIN: 'Main Room',
  QUIET: 'Quiet Room',
  SHOW: 'Show Room',
  'L-PRIVATE': 'L Private',
  'S-PRIVATE': 'S Private',
  'TERRACE-S': 'Terrace',
  'TERRACE-E': 'Terrace',
};
