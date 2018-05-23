import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesComponent } from './attendees/attendees.component';
import {SetupComponent} from './setup/setup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LanComponent} from './lan/lan.component';
import {GamesComponent} from './games/games.component';
import {RoyalBeefsComponent} from './royal-beefs/royal-beefs.component';

const routes: Routes = [
    { path: '', component: SetupComponent, pathMatch: 'full' }, // here we can add a landingpage
    { path: 'setup', component: SetupComponent },
    {
        path: ':reference', component: LanComponent, // use special layout here which is defined in LanComponent
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'attendees', component: AttendeesComponent },
            { path: 'games', component: GamesComponent },
            { path: 'royal-beefs', component: RoyalBeefsComponent },
        ]
    },
    {path: '**', component: SetupComponent}
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
