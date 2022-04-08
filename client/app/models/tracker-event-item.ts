import { TrackerEvent } from './tracker-event';
import { TrackerItem } from './tracker-item';

export interface TrackerEventItem {
  id: number;
  trackerEventId: number;
  trackerItemId: number;

  trackerEvent?: TrackerEvent;
  trackerItem?: TrackerItem;
}
