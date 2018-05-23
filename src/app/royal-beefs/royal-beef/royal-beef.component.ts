import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoyalBeef} from '../../models/royal-beef';
import {Lan} from '../../models/lan';
import {LanService} from '../../services/lan.service';

@Component({
  selector: 'app-royal-beef',
  templateUrl: './royal-beef.component.html',
  styleUrls: ['./royal-beef.component.css']
})
export class RoyalBeefComponent implements OnInit {
  @Input() royalBeef: RoyalBeef;
  @Output() save: EventEmitter<any> = new EventEmitter();
  lan: Lan;
  constructor(private lanService: LanService) {
      this.lan = this.lanService.get();
  }

  ngOnInit() {
    if (!this.royalBeef) {
        this.royalBeef = new RoyalBeef('', [], [], []);
    }
  }

  onSubmit() {
    console.log(this.royalBeef);
    // @TODO: validate
    this.save.emit(this.royalBeef);
  }

  reset() {
    this.royalBeef = new RoyalBeef('', [], [], []);
  }
}
