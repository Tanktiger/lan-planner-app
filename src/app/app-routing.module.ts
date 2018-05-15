import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeeComponent } from './attendee/attendee.component';
import {SetupComponent} from './setup/setup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LanComponent} from './lan/lan.component';

const routes: Routes = [
    { path: '', component: SetupComponent }, // here we can add a landingpage
    { path: 'setup', component: SetupComponent },
    {
        path: ':reference', component: LanComponent, // use special layout here which is defined in LanComponent
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'attendees', component: AttendeeComponent },
        ]
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
