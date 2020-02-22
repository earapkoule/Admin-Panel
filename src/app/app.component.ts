import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'admin-panel';
  userId: string = null;

  showDetails(userId: string): void {
  	this.userId = userId;
  }

}
