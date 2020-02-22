import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class AppUsersList implements OnInit {
	users: any[];
	@Output("selectUser") userSelected: EventEmitter<string> = new EventEmitter();

  	constructor(private usersService: UsersService) {}

  	ngOnInit() {
  		this.users = this.usersService.users;
  	}

	selectUser(userId: string): void {
		this.userSelected.emit(userId);
	}
}