import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isEnabled = false;
  isAdded = false;
  serverName = '';
  servers = [];

  constructor() {

    setTimeout(() => {
      this.isEnabled = true;
    }, 2000);
  }

  ngOnInit() {
  }

  addServer() {

    this.isAdded = true;

    this.servers.push(this.serverName);
  }



  // w/ [(ngModel)] we dont need to set input and serverName!!
  // updateServerName($event: Event) {
  //   console.log($event);
  //
  //   this.serverName = ($event.target as HTMLInputElement).value;
  // }
}
