import { Component, OnInit } from '@angular/core';
import { Meau } from './meau';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dcr-nav',
  templateUrl: './dcr-navbar.component.html',
  styleUrls: ['./dcr-navbar.component.scss']
})
export class DcrNavbarComponent implements OnInit {
  // private meau: Meau[]
  constructor() {}
  activeName = 'zh';
  activeMeau = '首页'; //  判断当前选取的 菜单
  meau: Meau[] = [];
  toggle(str: string): void {
    this.activeName = str === 'zh' ? 'zh' : 'en';
  }
  ngOnInit() {
    this.meau = [
      {
        name: '首页'
      },
      {
        name: '统计'
      },
      {
        name: '下载'
      },
      {
        name: '帮助'
      }
    ];
  }
}
