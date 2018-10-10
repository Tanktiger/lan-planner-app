import { Component, OnInit } from '@angular/core';
import { Lan } from '../models/lan';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {LanService} from "../services/lan.service";

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
      private lanService: LanService,
      private storage: LocalStorageService,
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.submitted = true;
    this.storage.set('lan', this.lan);
    await this.lanService.create(this.lan);
    this.router.navigate([`/lan/${this.lanService.getCurrentLanId()}/dashboard`]);
  }

}
