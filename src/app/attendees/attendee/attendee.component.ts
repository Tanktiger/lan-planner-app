import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Attendee} from '../../models/attendee';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css'],
    encapsulation: ViewEncapsulation.None,
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
      const copy = { ...this.attendee}; // { ...object} = copy shorthand es6
      // @TODO: validate
      this.save.emit(copy);

      this.attendee = new Attendee('', '');
    }

    reset() {
      this.attendee = new Attendee('', '');
    }
}
