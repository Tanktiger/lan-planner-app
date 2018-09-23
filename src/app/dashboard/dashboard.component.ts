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
  beefCount: number;
  challengesCount: number;
  constructor(
      private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.lan = this.storage.get('lan');
    this.challengesCount = 0;
    this.beefCount = 0;
    this.calculatePlacement();
  }

  calculatePlacement() {
    this.rankings = new Array(0);
    this.lan.royalBeefs.forEach((royalBeef: RoyalBeef, rIndex: number) => {
      this.beefCount++;
      royalBeef.challenges.forEach((challenge: Challenge, cIndex: number) => {
        this.challengesCount++;
        challenge.results.forEach((result: ChallengeResult, crIndex: number) => {
          let index = _.findIndex(this.rankings, ['id', result.attendee.id]);
          if (index === -1) {
            // init object
            this.rankings.push({
              name: result.attendee.name,
              position: 0,
              id: result.attendee.id,
              resultCount: 0
            });

            index = _.findIndex(this.rankings, ['id', result.attendee.id]);
          }
          this.rankings[index].position += +result.position;
          this.rankings[index].resultCount++;
        });
      });
    });


    this.rankings.map((ranking) => {
      ranking.position = _.round(ranking.position / ranking.resultCount);
      return ranking;
    });
    this.rankings = _.orderBy(this.rankings, ['position']);
    console.log(this.rankings);
  }
}
