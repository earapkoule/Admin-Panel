import { Injectable } from '@angular/core';
import { USERS } from 'src/app/data/user_data.js';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	users: any[] = USERS;

}