import { Component, OnInit } from '@angular/core';
import {Lan} from '../lan';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  submitted = false;
  lan: Lan = new Lan();

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    // @TODO: save to api
    console.log(this.lan);
    window.localStorage.setItem('lan', JSON.stringify(this.lan));
    this.router.navigate([`//dashboard`]);
  }

}
