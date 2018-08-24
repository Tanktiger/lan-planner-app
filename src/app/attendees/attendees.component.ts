import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Attendee } from '../models/attendee';
import { Lan } from '../models/lan';
import { LanService } from '../services/lan.service';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AttendeesComponent implements OnInit {

  selectedAttendee: Attendee;
  lan: Lan;
  constructor(
      private lanService: LanService
  ) { }

  ngOnInit() {
    this.lan = this.lanService.get();
    if (!this.lan.attendees) {
        this.lan.attendees = [];
    }
  }

  onSave(attendee: Attendee): void {
    let attendeeExists = false;
    this.lan.attendees.forEach((existingAttendee, index) => {
        if (existingAttendee.id === attendee.id) {
            this.lan.attendees[index] = attendee;
            attendeeExists = true;
        }
    });
    if (!attendeeExists) {
        this.lan.attendees.push(Object.assign({}, attendee));
    }
    this.lanService.set(this.lan);
  }

  editAttendee(attendee: Attendee): void {

  }
}
