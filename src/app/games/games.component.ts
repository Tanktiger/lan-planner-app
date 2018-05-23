import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { LanService } from '../services/lan.service';
import { Lan } from '../models/lan';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  lan: Lan;
  selectedGame: Game;
  constructor(private lanService: LanService) {
    this.lan = this.lanService.get();
    if (!this.lan.games) {
      this.lan.games = [];
    }
  }

  ngOnInit() {
  }

  onChange(game: Game): void {
    let gameExists = false;
    this.lan.games.forEach((existingGame, index) => {
      if (existingGame.id === game.id) {
          this.lan.games[index] = game;
          gameExists = true;
      }
    });
    if (!gameExists) {
        this.lan.games.push(Object.assign({}, game));
    }
    this.lanService.set(this.lan);
  }
}
