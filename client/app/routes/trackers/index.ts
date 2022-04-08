import { Routes } from '@angular/router';
import { TrackersRoute } from './trackers.route';
import { TrackerRoute } from './tracker.route';

export const TrackerComponents = [TrackersRoute, TrackerRoute];

export const TrackerRoutes: Routes = [
  { path: '', component: TrackersRoute },
  { path: ':id', component: TrackerRoute },
  { path: '', redirectTo: 'trackers', pathMatch: 'prefix' },
  { path: '**', redirectTo: 'trackers', pathMatch: 'prefix' },
];
