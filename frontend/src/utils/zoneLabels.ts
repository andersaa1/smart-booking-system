import type { Zone } from '../types/types';

export const zoneLabels: Partial<Record<Zone, string>> = {
  MAIN: 'Main Room',
  QUIET: 'Quiet Room',
  SHOW: 'Show Room',
  LPRIVATE: 'Large Private Room',
  SPRIVATE: 'Small Private Room',
  STERRACE: 'Terrace',
  ETERRACE: 'Terrace',
};
