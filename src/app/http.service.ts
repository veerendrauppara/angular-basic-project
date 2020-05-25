import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Observer } from 'rxjs/observer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  viewingPage: Observable<number>;

  constructor() {
    this.viewingPage = Observable.interval(1000);

  }
  observableSer(): any {
    return Observable.interval(1000);
  }
  observableSer2(): any {
    return Observable.create((obs: Observer<string>) => {
      setTimeout(() => {
        obs.next('1st one');
      }, 2000)
      setTimeout(() => {
        obs.error('error occured');
      }, 5000)
      setTimeout(() => {
        obs.complete();
      }, 4000)
    })
  }
  logout() {
    localStorage.setItem('userCred', null);
  }
}
