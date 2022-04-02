import { Tracker } from './tracker';
import { TrackerEventItem } from './tracker-event-item';
import { TrackerItem } from './tracker-item';

export interface TrackerEvent {
  id: number;
  trackerId: number;
  name: string;
  type: string;
  date: Date;

  tracker?: Tracker;

  eventItems?: TrackerEventItem[];
  currentItems?: TrackerItem[];
}
