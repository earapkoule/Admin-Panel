import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppUsersListComponent } from './users-list/users-list.component';
import { AppUserDetailsComponent } from './user-details/user-details.component';
import { earthquakesReducer } from './store/earthquakes/earthquakes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AppUsersListComponent,
    AppUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      earthquakes: earthquakesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
