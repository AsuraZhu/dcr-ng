import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'registercomponent',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegistComponent implements OnInit {
  constructor() { }
  isFalse= true;

  ngOnInit() { }
  // 获取 验证码
  getCode() {
    console.log('获取验证码');
  }
  // 点击注册
  resetPass() {
    console.log('注册');
  }
}
