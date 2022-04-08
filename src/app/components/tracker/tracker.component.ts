import { Component, Input, OnInit } from '@angular/core';
import { Tracker } from '../../models/tracker';

@Component({
  selector: 'tracker',
  templateUrl: './tracker.component.html',
})
export class TrackerComponent implements OnInit {
  @Input() tracker: Tracker;

  constructor() {}

  ngOnInit() {}
}
