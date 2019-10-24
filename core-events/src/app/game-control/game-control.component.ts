import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // custom event definition w/ accessible from outside
  @Output() intervalFired = new EventEmitter<number>();

  interval;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {

      // fire the event on every seconds
      this.intervalFired.emit(this.counter + 1);
      this.counter++;

    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
