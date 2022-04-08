import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../services';

@Component({
  selector: 'trackers-route',
  templateUrl: './trackers.route.html',
})
export class TrackersRoute implements OnInit {
  constructor(public tracking: TrackingService) {}

  ngOnInit() {}
}
