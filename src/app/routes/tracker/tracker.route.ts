import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { TrackingService } from '../../../services';

@Component({
  selector: 'tracker-route',
  templateUrl: 'tracker.route.html',
})
export class TrackerRoute implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public tracking: TrackingService
  ) {}

  ngOnInit() {
    this.sub = combineLatest({
      params: this.route.paramMap,
    }).subscribe((event) => {
      if (event.params.get('id'))
        this.tracking.getTracker(+event.params.get('id'));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
