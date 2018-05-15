import {Component, Input, OnInit} from '@angular/core';
import {Attendee} from '../attendee';

@Component({
  selector: 'app-new-attendee',
  templateUrl: './new-attendee.component.html',
  styleUrls: ['./new-attendee.component.css']
})
export class NewAttendeeComponent implements OnInit {
  @Input() attendee: Attendee;
  constructor() { }

  ngOnInit() {
  }

}
