import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  // make it set by outside of component
  @Input()
  even: number;

  constructor() { }

  ngOnInit() {
  }

}
