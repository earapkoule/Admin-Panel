import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class AppUserDetails implements OnChanges, OnInit {
	newUser: any;
	isSaveDisabled: boolean = false;
	@Input("userId") userId: string = null;

  	constructor(private usersService: UsersService) {}

  	ngOnInit() {
  		this.newUser = this.usersService.users[0];
  	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
		let selectedUser = this.findUserById(changes.userId.currentValue);
		if(selectedUser != null) {
			this.newUser = {
				...selectedUser
			};
		}
	}

	findUserById(userId: string): any {
		for(let user of this.usersService.users) {
			if(user.id == userId) {
				return user;
			}
		}
		return null;
	}

	cancelChanges() {
		let selectedUserIndex: number = this.usersService.users.findIndex((user) => {
    		return user.id === this.newUser.id;
    	})

		this.newUser = {
  			...this.usersService.users[selectedUserIndex]
    	};
	}

	saveChanges() {
    	let selectedUserIndex: number = this.usersService.users.findIndex((user) => {
    		return user.id === this.newUser.id;
    	})

    	this.usersService.users[selectedUserIndex] = {
    		...this.newUser
    	}
	}
}