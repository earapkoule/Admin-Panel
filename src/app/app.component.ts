import { Component } from '@angular/core';
import { USERS } from './data/user_data.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = USERS;
  title = 'admin-panel';
  constructor(){
  	console.log(USERS);
  }
}
