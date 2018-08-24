import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Lan } from '../models/lan';
import { LocalStorageService } from '../services/local-storage.service';
import {RoyalBeef} from '../models/royal-beef';
import {ChallengeResult} from '../models/challenge-result';
import {Challenge} from '../models/challenge';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  lan: Lan;
  rankings: Array<any>;
  challengesCount: number;
  objectKeys = Object.keys;
  constructor(
      private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.lan = this.storage.get('lan');
    this.challengesCount = 0;
    this.calculatePlacement();
  }

  calculatePlacement() {
    this.rankings = new Array(0);
    this.lan.royalBeefs.forEach((royalBeef: RoyalBeef, rIndex: number) => {
      royalBeef.challenges.forEach((challenge: Challenge, cIndex: number) => {
        challenge.results.forEach((result: ChallengeResult, crIndex: number) => {
          this.challengesCount++;
          if (!(result.attendee.id in Object.keys(this.rankings))) {
              this.rankings[result.attendee.id] = 0;
          }
          this.rankings[result.attendee.id] += +result.position; // + operator makes a string to an number
        });
      });
    });

    // @TODO: geht noch nicht!
    this.rankings.map((ranking, attendeeId) => {
      console.log(ranking);
      return ranking / this.challengesCount;
    }).sort((a, b) => {
      console.log(a, b);
      if (a < b) { return -1; }
      if (a > b) { return 1; }

      return 0;
    });

    console.log(this.rankings);
  }
}
