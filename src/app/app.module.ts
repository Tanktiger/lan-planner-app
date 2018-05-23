import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { SetupComponent } from './setup/setup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanComponent } from './lan/lan.component';
import { LocalStorageService } from './services/local-storage.service';
import { LanService } from './services/lan.service';
import { GamesComponent } from './games/games.component';
import { RoyalBeefsComponent } from './royal-beefs/royal-beefs.component';
import { RoyalBeefComponent } from './royal-beefs/royal-beef/royal-beef.component';
import { GameComponent } from './games/game/game.component';
import { AttendeeComponent } from './attendees/attendee/attendee.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeComponent } from './challenges/challenge/challenge.component';


@NgModule({
  declarations: [
    AppComponent,
    AttendeesComponent,
    SetupComponent,
    DashboardComponent,
    LanComponent,
    GamesComponent,
    RoyalBeefsComponent,
    RoyalBeefComponent,
    GameComponent,
    AttendeeComponent,
    ChallengesComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LocalStorageService, LanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
