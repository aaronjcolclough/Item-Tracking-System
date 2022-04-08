import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import {
  Tracker,
  TrackerEvent,
  TrackerEventItem,
  TrackerItem,
} from '../models';
import {
  TRACKER,
  TRACKER_EVENTS,
  TRACKER_EVENT_ITEMS,
  TRACKER_ITEMS,
} from './data/data-store';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private tracker = new BehaviorSubject<Tracker>(null);
  tracker$ = this.tracker.asObservable();

  private events = new BehaviorSubject<TrackerEvent[]>(null);
  events$ = this.events.asObservable();
  private event = new BehaviorSubject<TrackerEvent>(null);
  event$ = this.event.asObservable();

  private items = new BehaviorSubject<TrackerItem[]>(null);
  items$ = this.items.asObservable();
  private item = new BehaviorSubject<TrackerItem>(null);
  item$ = this.item.asObservable();

  private eventItems = new BehaviorSubject<TrackerEventItem[]>(null);
  eventItems$ = this.eventItems.asObservable();
  private eventItem = new BehaviorSubject<TrackerEventItem>(null);
  eventItem$ = this.eventItem.asObservable();

  constructor() {}

  //#region GET
  getTracker = (id: number): Promise<Tracker> =>
    new Promise((resolve) => {
      of(TRACKER).subscribe({
        next: (data) => {
          this.tracker.next(data);
          resolve(data);
        },
        error: (err) => {
          alert(err);
          resolve(null);
        },
      });
    });

  getTrackerEvents = (trackerId: number): Promise<TrackerEvent[]> =>
    new Promise((resolve) => {
      of(TRACKER_EVENTS.filter((x) => x.trackerId === trackerId)).subscribe({
        next: (data) => {
          this.events.next(data);
          resolve(data);
        },
        error: (err) => {
          alert(err);
          resolve(null);
        },
      });
    });

  getTrackerEvent = (id: number): Promise<TrackerEvent> =>
    new Promise((resolve) => {
      of(TRACKER_EVENTS.find((x) => x.id === id)).subscribe({
        next: (data) => {
          this.event.next(data);
          resolve(data);
        },
        error: (err) => {
          alert(err);
          resolve(null);
        },
      });
    });

  getTrackerItems = (trackerId: number): Promise<TrackerItem[]> =>
    new Promise((resolve) => {
      of(TRACKER_ITEMS.filter((x) => x.trackerId === trackerId)).subscribe({
        next: (data) => {
          this.items.next(data);
          resolve(data);
        },
        error: (err) => {
          alert(err);
          resolve(null);
        },
      });
    });

  getTrackerItem = (id: number): Promise<TrackerItem> =>
    new Promise((resolve) => {
      of(TRACKER_ITEMS.find((x) => x.id === id)).subscribe({
        next: (data) => {
          this.item.next(data);
          resolve(data);
        },
        error: (err) => {
          alert(err);
          resolve(null);
        },
      });
    });

  //#endregion

  //#region ADD

  addTrackerEvent = (e: TrackerEvent): Promise<boolean> =>
    new Promise((resolve) => {
      of(TRACKER_EVENTS.push(e)).subscribe({
        next: () => {
          alert(`${e.name} saved successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  addTrackerItem = (i: TrackerItem): Promise<boolean> =>
    new Promise((resolve) => {
      of(TRACKER_ITEMS.push(i)).subscribe({
        next: () => {
          alert(`${i.name} saved successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  addTrackerEventItem = (i: TrackerEventItem): Promise<boolean> =>
    new Promise((resolve) => {
      of(TRACKER_EVENT_ITEMS.push(i)).subscribe({
        next: () => {
          alert(`Tracker Event Item saved successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  //#endregion
  //#region UPDATE

  updateTrackerEvent = (e: TrackerEvent): Promise<boolean> =>
    new Promise((resolve) => {
      of(
        TRACKER_EVENTS.forEach((x, index) => {
          if (x.id === e.id) TRACKER_EVENTS.splice(index, 1, e);
        })
      ).subscribe({
        next: () => {
          alert(`${e.name} saved successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  updateTrackerItem = (i: TrackerItem): Promise<boolean> =>
    new Promise((resolve) => {
      of(
        TRACKER_ITEMS.forEach((x, index) => {
          if (x.id === i.id) TRACKER_ITEMS.splice(index, 1, i);
        })
      ).subscribe({
        next: () => {
          alert(`${i.name} updated successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  updateTrackerEventItem = (i: TrackerEventItem): Promise<boolean> =>
    new Promise((resolve) => {
      of(
        TRACKER_EVENT_ITEMS.forEach((x, index) => {
          if (x.id === i.id) TRACKER_EVENT_ITEMS.splice(index, 1, i);
        })
      ).subscribe({
        next: () => {
          alert(`Tracker Event Item saved successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  //#endregion
  //#region UPDATE

  removeTrackerEvent = (e: TrackerEvent): Promise<boolean> =>
    new Promise((resolve) => {
      of(
        TRACKER_EVENTS.forEach((x, index) => {
          if (x.id === e.id) TRACKER_EVENTS.splice(index, 1);
        })
      ).subscribe({
        next: () => {
          alert(`${e.name} saved successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  removeTrackerItem = (i: TrackerItem): Promise<boolean> =>
    new Promise((resolve) => {
      of(
        TRACKER_ITEMS.forEach((x, index) => {
          if (x.id === i.id) TRACKER_ITEMS.splice(index, 1);
        })
      ).subscribe({
        next: () => {
          alert(`${i.name} updated successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  removeTrackerEventItem = (i: TrackerEventItem): Promise<boolean> =>
    new Promise((resolve) => {
      of(
        TRACKER_EVENT_ITEMS.forEach((x, index) => {
          if (x.id === i.id) TRACKER_EVENT_ITEMS.splice(index, 1);
        })
      ).subscribe({
        next: () => {
          alert(`Tracker Event Item saved successfully`);
          resolve(true);
        },
        error: (err) => {
          alert(err);
          resolve(false);
        },
      });
    });

  //#endregion
}
