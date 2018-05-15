import { Component, OnInit } from '@angular/core';
import { Attendee } from '../attendee';
import {ATTENDEES} from '../mock-attendees';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {

  attendees = ATTENDEES;
  selectedAttendee: Attendee;
  constructor() { }

  ngOnInit() {
  }

  onSelect(attendee: Attendee): void {
      this.selectedAttendee = attendee;
  }
}
