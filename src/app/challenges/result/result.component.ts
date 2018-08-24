import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge';
import {ChallengeResult} from '../../models/challenge-result';
import {Attendee} from '../../models/attendee';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
    @Input() challenge: Challenge;
    @Input() attendee: Attendee;
    @Input() result: ChallengeResult;
    @Input() round: number;
    @Output() save: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
        console.log(this.result);
        if (!this.result) {
            this.reset();
        }
    }

    onSubmit() {
        // @TODO: validate
        this.save.emit(this.result);
    }

    reset() {
        this.result = new ChallengeResult(this.attendee, 0, '', this.round);
    }

}
