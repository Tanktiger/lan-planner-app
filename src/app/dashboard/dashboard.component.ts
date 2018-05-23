import { Component, OnInit } from '@angular/core';
import { Lan } from '../models/lan';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lan: Lan;
  constructor(
      private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.lan = this.storage.get('lan');
  }

}
