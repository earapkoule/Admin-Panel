import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class AppUsersListComponent implements OnInit {
	users: any[];
  	userId: string;
	@Output("selectUser") userSelected: EventEmitter<string> = new EventEmitter();

	constructor(private usersService: UsersService) {}

	ngOnInit() {
		this.users = this.usersService.users;
    	this.userId = this.usersService.users[0].id;
	}

	selectUser(userId: string): void {
    	this.userId = userId;
		this.userSelected.emit(userId);
	}
}