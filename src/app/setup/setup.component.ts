import { Component, OnInit } from '@angular/core';
import { Lan } from '../models/lan';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

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
      private router: Router,
      private storage: LocalStorageService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    // @TODO: save to api
    console.log(this.lan);
    this.storage.set('lan', this.lan);
    this.router.navigate([`/lan/${this.lan.reference}/dashboard`]);
  }

}
