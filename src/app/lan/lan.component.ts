import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LanService} from '../services/lan.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-lan',
  templateUrl: './lan.component.html',
  styleUrls: ['./lan.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LanComponent implements OnInit {
  id: number;
  constructor(private lanService: LanService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = params['reference']; // (+) converts string 'id' to a number
          this.lanService.load(this.id);
      });
  }

}
