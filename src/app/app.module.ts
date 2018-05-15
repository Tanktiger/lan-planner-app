import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { FormsModule } from '@angular/forms';
import { NewAttendeeComponent } from './new-attendee/new-attendee.component';
import { AppRoutingModule } from './/app-routing.module';
import { SetupComponent } from './setup/setup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanComponent } from './lan/lan.component';


@NgModule({
  declarations: [
    AppComponent,
    AttendeeComponent,
    NewAttendeeComponent,
    SetupComponent,
    DashboardComponent,
    LanComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
