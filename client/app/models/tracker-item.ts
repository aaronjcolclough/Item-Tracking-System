import { Tracker } from './tracker';
import { TrackerEvent } from './tracker-event';
import { TrackerEventItem } from './tracker-event-item';

export interface TrackerItem {
  id: number;
  trackerId: number;
  currentEventId: number;
  name: string;

  tracker?: Tracker;
  currentEvent?: TrackerEvent;

  itemEvents?: TrackerEventItem[];
}
