import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  get(key) {
      return JSON.parse(window.localStorage.getItem(key));
  }
  set(key, data) {
      data = JSON.stringify(data);
      window.localStorage.setItem(key, data);
  }
  remove(key) {
      window.localStorage.removeItem(key);
  }
}
