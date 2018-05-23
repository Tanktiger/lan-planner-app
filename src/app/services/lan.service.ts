import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Lan } from '../models/lan';
import {RoyalBeef} from '../models/royal-beef';
import * as _ from 'lodash';
@Injectable()
export class LanService {

  constructor(
      private storage: LocalStorageService
  ) { }

  get() {
    return this.storage.get('lan');
  }

  set(lan: Lan) {
    return this.storage.set('lan', lan);
  }

  setRoyalBeef(royalBeef: RoyalBeef) {
    const lan = this.get();
    const index = _.findIndex(lan.royalBeefs, (rb: RoyalBeef) => {
      return rb.id === royalBeef.id;
    });
    if (index !== -1) {
        lan.royalBeefs[index] = royalBeef;
    } else {
        lan.royalBeefs.push(Object.assign({}, royalBeef));
    }

    this.set(lan);
  }
}
