import { Component } from '@angular/core';
import { USERS } from 'src/app/data/user_data.js';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class AppUserDetails {
	users = USERS;
}