import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Attendee} from '../../models/attendee';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {
    @Input() attendee: Attendee;
    @Output() save: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
      if (!this.attendee) {
          this.attendee = new Attendee('', '');
      }
    }

    onSubmit() {
      console.log(this.attendee);
      // @TODO: validate
      this.save.emit(this.attendee);
    }

    reset() {
      this.attendee = new Attendee('', '');
    }
}
