import { Component, OnInit } from '@angular/core';
import {LanService} from '../services/lan.service';
import {Lan} from '../models/lan';
import {RoyalBeef} from '../models/royal-beef';

@Component({
  selector: 'app-royal-beefs',
  templateUrl: './royal-beefs.component.html',
  styleUrls: ['./royal-beefs.component.css']
})
export class RoyalBeefsComponent implements OnInit {
  lan: Lan;
  selectedRoyalBeef: RoyalBeef;
  constructor(private lanService: LanService) { }

  ngOnInit() {
      this.lan = this.lanService.get();
      if (!this.lan.games) {
          this.lan.royalBeefs = [];
      }
  }
  onChange(royalBeef: RoyalBeef): void {
    let royalBeefsExists = false;
    this.lan.games.forEach((existingRoyalBeef, index) => {
        if (existingRoyalBeef.id === royalBeef.id) {
            this.lan.royalBeefs[index] = royalBeef;
            royalBeefsExists = true;
        }
    });
    if (!royalBeefsExists) {
        this.lan.royalBeefs.push(Object.assign({}, royalBeef));
    }
    this.lanService.set(this.lan);
  }
}
