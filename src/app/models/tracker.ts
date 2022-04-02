import { TrackerEvent } from './tracker-event';
import { TrackerItem } from './tracker-item';

export interface Tracker {
  id: number;
  title: string;
  dateOpened: Date;
  DateClosed?: Date;

  items?: TrackerItem[];
  events?: TrackerEvent[];
}
