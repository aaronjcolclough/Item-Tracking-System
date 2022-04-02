import { Tracker, TrackerEvent, TrackerEventItem, TrackerItem } from '../../models';

export const TRACKER: Tracker = {
  id: 1,
  title: 'Item Tracker 01',
  dateOpened: new Date(),
};

export const EVENT_ITEM_1: TrackerEventItem = {
  id: 1,
  trackerEventId: 1,
  trackerItemId: 1
}

export const EVENT_ITEM_2: TrackerEventItem = {
  id: 2,
  trackerEventId: 1,
  trackerItemId: 2
}

export const EVENT_ITEM_3: TrackerEventItem = {
  id: 3,
  trackerEventId: 1,
  trackerItemId: 3
}

export const TRACKER_EVENT_ITEMS: TrackerEventItem[] = [EVENT_ITEM_1,EVENT_ITEM_2, EVENT_ITEM_3];

export const ITEM_1: TrackerItem = {
  id: 1,
  trackerId: 1,
  currentEventId: 1,
  name: 'Item 1',
  itemEvents: [EVENT_ITEM_1],
};

export const ITEM_2: TrackerItem = {
  id: 2,
  trackerId: 1,
  currentEventId: 1,
  name: 'Item 2',
  itemEvents: [EVENT_ITEM_2],
};

export const ITEM_3: TrackerItem = {
  id: 3,
  trackerId: 1,
  currentEventId: 1,
  name: 'Item 3',
  itemEvents: [EVENT_ITEM_3],
};

export const TRACKER_ITEMS: TrackerItem[] = [ITEM_1, ITEM_2, ITEM_3];

export const CHECKOUT_EVENT: TrackerEvent = {
  id: 1,
  trackerId: 1,
  type: 'check-out',
  name: 'Check Out',
  date: TRACKER.dateOpened,
  eventItems: [EVENT_ITEM_1],
  currentItems: [ITEM_1],
};

export const TRACKER_EVENTS: TrackerEvent[] = [CHECKOUT_EVENT];

