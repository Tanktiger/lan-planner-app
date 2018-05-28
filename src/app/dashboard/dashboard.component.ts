import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Lan } from '../models/lan';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
    encapsulation: ViewEncapsulation.None,
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
