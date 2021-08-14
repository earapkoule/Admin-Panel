import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';
import {HttpClient} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { EarthquakesState } from './store/earthquakes/earthquakes.reducer';
import { setEarthquakes } from './store/earthquakes/earthquakes.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';
  userId: string = null;
  eqArray = [];

  constructor(
    private usersService: UsersService,
    private http: HttpClient,
    private store: Store<{earthquakes: EarthquakesState}>
  ) {}

  ngOnInit() {
    this.userId = this.usersService.users[0].id;
    this.fetchData();
  }

  fetchData() {
    this.http
    .get('https://earthquakeapi.plytas.com/earthquakes')
    .subscribe((data: any) => {
      this.store.dispatch(setEarthquakes({earthquakes: data.results}));
    });

  }

  showDetails(userId: string): void {
    this.userId = userId;
  }
}