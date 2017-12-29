import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../shared/services/register.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'registercomponent',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegistComponent implements OnInit {
  constructor(private get: RegisterService) {}
  isFalse = true;
  ngOnInit() {}
  // 获取 验证码
  getCode() {
    console.log('获取验证码');
  }
  // 点击注册
  resetPass() {
    this.get.getCode().then(res => {});
    console.log('注册');
  }

  eventHandler(event: any, type: string): void {
    //  获取到 输入框的值
    console.log(event, type);
  }
}
