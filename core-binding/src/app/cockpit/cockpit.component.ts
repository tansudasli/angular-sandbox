import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // custom events as properties !
  @Output()
  serverCreated = new EventEmitter<{servername: string, serverContent: string}>();
  @Output()
  blueprintCreated = new EventEmitter<{servername: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';


  constructor() { }

  ngOnInit() {
  }

  // trigger serverAdded in app.component
  onAddServer() {
    this.serverCreated.emit({servername: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({servername: this.newServerName, serverContent: this.newServerContent});
  }

}
