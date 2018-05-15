import { Component, OnInit } from '@angular/core';
import {Lan} from '../lan';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lan: Lan;
  constructor() { }

  ngOnInit() {
    this.lan = JSON.parse(window.localStorage.getItem('lan'));
  }

}
