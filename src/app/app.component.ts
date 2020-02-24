import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';
  userId: string = null;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.userId = this.usersService.users[0].id;
  }

  showDetails(userId: string): void {
    this.userId = userId;
  }
}