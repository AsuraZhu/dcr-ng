import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as reducer from '../../ngrx/reducer';
import * as load from '../../ngrx/action/loading';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../../ngrx/reducer/userinfo/user.class';
import { AttackService } from '../../shared/AttackService';
import { DcrInput } from '../../shared/components/dcr-input/dcrinput';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  tagState$: Observable<boolean>;
  data$: Observable<any>;
  strT: string;
  constructor(private http: HttpClient, private store: Store<reducer.State>, private attackService: AttackService) {
    this.attackService.damage$.subscribe(damage => {
      console.log(damage);
    });
  }
  eventHandler(event: DcrInput): void {
    console.log(event.imgsrc);
  }
  open(): void {
    const user = new User();
    user.name = 'zs';
    user.age = 10;
    this.store.dispatch(new load.HideAction(user));
  }

  ngOnInit() {

    this.http.get('http://batpool.dev.ailadui.net/v1/api/user/public/checkgt?time=1514433161894')
      .toPromise()
      .then(data => {
        initGeetest({
          gt: data['gt'],
          challenge: data['challenge'],
          product: 'popup',
          width: '300px'
        }, (captchaObj) => {
          captchaObj.appendTo('#captcha');
          captchaObj.onReady(function () {
          });
        });
      });
  }
}
