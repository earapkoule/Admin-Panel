import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppUsersList } from './users-list/users-list.component';
import { AppUserDetails } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AppUsersList,
    AppUserDetails
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
