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
  lan: any;
  selectedRoyalBeef: RoyalBeef;
  constructor(private lanService: LanService) { }

  ngOnInit() {
      this.lan = this.lanService.get();
      if (!this.lan.royalBeefs) {
          this.lan.royalBeefs = [];
      }
  }
  onChange(royalBeef: RoyalBeef): void {
    let royalBeefsExists = false;
    this.lan.royalBeefs.forEach((existingRoyalBeef, index) => {
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
  removeRoyalBeef(royalBeef: RoyalBeef): void {
      if (confirm('Do you really want to delete this royal beef?')) {
          this.lan.royalBeefs.splice(this.lan.royalBeefs.indexOf(royalBeef), 1);
      }
  }
}
