import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Lan } from '../models/lan';
import {RoyalBeef} from '../models/royal-beef';
import * as _ from 'lodash';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class LanService {
  readonly path = 'lans';
  lansCollectionRef: AngularFirestoreCollection<Lan>;
  lanRef: AngularFirestoreCollection<Lan>;
  lans$: Observable<Lan[]>;
  lan$: any;

  constructor(
      private storage: LocalStorageService,
      private afs: AngularFirestore,
      private router: Router
  ) {
    this.lansCollectionRef = this.afs.collection<Lan>(this.path);
    this.lans$ = this.lansCollectionRef.valueChanges();
  }

  get() {
    const lan = this.storage.get('lan');
    if ((!lan || !lan.name) && this.lan$) {
      return this.lan$.subscribe((doc) => {
          console.log(doc);
          if (doc && doc.name) {
              doc.id = id;
              this.storage.set('lan', doc);
              this.storage.set('lanId', id);
          } else {
              this.router.navigate([`/setup`]);
          }
      });
    }
    return lan;
  }

  getCurrentLanId() {
    return this.storage.get('lanId');
  }

  create(lan: Lan) {
      // return this.storage.set('lan', lan);
    const id = this.lansCollectionRef.ref.doc().id;
    this.lansCollectionRef.add(Object.assign({}, lan)).then((result) => {
      lan.id = id;
      this.storage.set('lanId', lan.id);
      this.lanRef = this.afs.collection<Lan>('lans/' + lan.id);
      this.lan$ = this.lanRef.valueChanges();
    });
  }

  set(lan: Lan) {
    this.storage.set('lan', lan);
    return this.lanRef.update(lan);
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

  load(id) {
      this.lanRef = this.lansCollectionRef.doc(id);
      this.lan$ = this.lanRef.valueChanges();
      this.lan$.subscribe((doc) => {
        console.log(doc);
          if (doc && doc.name) {
              doc.id = id;
              this.storage.set('lan', doc);
              this.storage.set('lanId', id);
          } else {
              this.router.navigate([`/setup`]);
          }
      });
  }
}
