import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from '../../models/game';
import * as _ from 'lodash';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: Game;
  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    if (!this.game) {
        this.game = new Game('', '');
    }
  }

  onSubmit() {
    console.log(this.game);
    // @TODO: validate
    this.save.emit(this.game);
  }

  reset() {
    this.game = new Game('', '');
  }
}
