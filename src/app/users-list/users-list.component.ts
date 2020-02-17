import { Component } from '@angular/core';
import { USERS } from 'src/app/data/user_data.js';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class AppUsersList {
	users = USERS;
}