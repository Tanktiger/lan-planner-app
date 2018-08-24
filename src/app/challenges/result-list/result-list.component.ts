import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge';
import {RoyalBeef} from '../../models/royal-beef';
import {ChallengeResult} from '../../models/challenge-result';
import {Attendee} from "../../models/attendee";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
    @Input() challenge: Challenge;
    @Input() royalBeef: RoyalBeef;
    rounds: Array<number>;
    @Output() save: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
        this.rounds = Array(this.challenge.rounds).fill(0).map((x, i) => i + 1);
    }

    onChangeResult(result: ChallengeResult, challenge: Challenge) {
        let resultExists = false;
        challenge.results.forEach((existingResult, index) => {
            if (existingResult.id === result.id) {
                challenge.results[index] = result;
                resultExists = true;
            }
        });
        if (!resultExists) {
            challenge.results.push(Object.assign({}, result));
        }
        this.save.emit(challenge);
    }

    getResultByAttendee(attendee: Attendee) {
        return this.challenge.results.find(existingResult => existingResult.attendee.id === attendee.id);
    }
}
