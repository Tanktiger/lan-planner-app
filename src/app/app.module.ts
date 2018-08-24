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
import {ScriptLoaderService} from './services/script-loader.service';
import {LayoutModule} from './theme/layouts/layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResultComponent } from './challenges/result/result.component';
import { ResultListComponent } from './challenges/result-list/result-list.component';


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
    ChallengeComponent,
    ResultComponent,
    ResultListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [LocalStorageService, LanService, ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
