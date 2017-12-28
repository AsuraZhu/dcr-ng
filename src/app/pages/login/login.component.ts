import { Component, OnInit } from '@angular/core';
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
import { GtService } from '../../shared/services/index';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  tagState$: Observable<boolean>;
  data$: Observable<any>;
  strT: string;
  constructor(
    private store: Store<reducer.State>,
    private attackService: AttackService,
    private gtService: GtService
  ) {
    this.attackService.damage$.subscribe(damage => {
      console.log(damage);
    });
  }
  eventHandler(event: any): void {
    //  获取到 输入框的值
  }
  open(): void {
    const user = new User();
    user.name = 'zs';
    user.age = 10;
    this.store.dispatch(new load.HideAction(user));
  }

  ngOnInit() {
    this.gtService.getData().then(data => {
      initGeetest({
        gt: data['gt'],
        challenge: data['challenge'],
        product: 'popup',
        width: '280px'
      }, (captchaObj) => {
        captchaObj.appendTo('#captcha');
        captchaObj.onReady(function () {
        });
      });
    });
  }
// 登录
  login() {
    console.log('登录');
  }
}
