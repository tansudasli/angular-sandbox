import {Component, Input, OnInit} from '@angular/core';

/**
 * this will represents only 1 server item.
 * many servers possible but that mechanism is inside app.component!
 * so we need to transfer data to server-element.component from app.component
 */
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // json object
  @Input()
  element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
