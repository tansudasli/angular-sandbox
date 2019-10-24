import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // initialized w/ dummy data
  serverElements = [{type: 'server', name: 'test server', content: 'lorem ipsum dotri imap'}];

  onServerAdded(serverData: {servername: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.serverContent});
  }

  onBlueprintAdded(serverData: {servername: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.servername,
      content: serverData.serverContent});
  }
}
