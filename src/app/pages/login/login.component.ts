import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as reducer from '../../ngrx/reducer';
import * as load from '../../ngrx/action/loading';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  tagState$: Observable<boolean>;
  constructor(private http: HttpClient, private store: Store<reducer.State>) {
    console.log('zzz');
    this.tagState$ = this.store.select('loading').startWith(true);
    this.store.select('loading').startWith(true).subscribe(data => {console.log(data); });
    this.store.select('userinfo').subscribe(data => {
      console.log('测试');
      console.log(data);
    });
    const a = new Subject<string>();
    a.combineLatest(this.tagState$).subscribe(res => {
      console.log(res);
    });
    a.next('0');
    setTimeout(() => {a.next('123'); }, 1000);
    setTimeout(() => {a.next('1234'); }, 10000);
   }
  open(): void {
    this.store.dispatch(new load.HideAction());
  }
  ngOnInit() {
    this.open();
    this.store.dispatch(new load.ShowAction());
   const login =  this.http.get('http://batpool.dev.ailadui.net/v1/api/user/public/login' , {params: {
     'challenge': '',
     'device_type': 'web',
     'password': '123456',
     'seccode': '',
     'username': '13823688575',
     'validate': ''
   }})
    .toPromise()
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      return Promise.reject(error.message || error);
    })
    ;
    console.log(login);
   }
}
