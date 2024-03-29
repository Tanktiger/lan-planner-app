import {Component, Input, OnInit} from '@angular/core';
import {Lan} from '../models/lan';
import {Challenge} from '../models/challenge';
import {LanService} from '../services/lan.service';
import {RoyalBeef} from '../models/royal-beef';
import {ActivatedRoute} from '@angular/router';
import {ChallengeResult} from "../models/challenge-result";

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  lan: any;
  selectedChallenge: Challenge;
  @Input() royalBeef: RoyalBeef;
  constructor(
      private lanService: LanService,
      private route: ActivatedRoute
  ) {
    this.lan = this.lanService.get();
  }

  ngOnInit() {
    console.log(this.route.paramMap);
  }

  onChange(challenge: Challenge): void {
    let challengeExists = false;
    this.royalBeef.challenges.forEach((existingChallenge, index) => {
        if (existingChallenge.id === challenge.id) {
            this.royalBeef.challenges[index] = challenge;
            challengeExists = true;
        }
    });
    if (!challengeExists) {
        this.royalBeef.challenges.push(Object.assign({}, challenge));
    }
    this.lanService.setRoyalBeef(this.royalBeef);
  }
  removeChallenge(challenge: Challenge): void {
      if (confirm('Do you really want to delete this challenge?')) {
          this.royalBeef.challenges.splice(this.royalBeef.challenges.indexOf(challenge), 1);
          this.lanService.setRoyalBeef(this.royalBeef);
      }
  }
}
