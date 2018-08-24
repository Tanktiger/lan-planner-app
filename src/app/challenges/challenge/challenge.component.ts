import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  @Input() challenge: Challenge;
  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    if (!this.challenge) {
      this.challenge = new Challenge('', '', [], []);
    }
  }

  onSubmit() {
    console.log(this.challenge);
    const copy = { ...this.challenge};
    // @TODO: validate
    this.save.emit(copy);

    this.reset();
  }

  reset() {
    this.challenge = new Challenge('', '', [], []);
  }
}
