
import { Component, OnInit } from '@angular/core';
import { Meau } from './meau';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dcr-nav',
  templateUrl: './dcr-navbar.component.html',
  styleUrls: ['./dcr-navbar.component.scss']
})
export class DcrNavbarComponent implements OnInit {
  constructor(private meau: Meau[]) { }
  activeName = 'zh';
  toggle(str: string): void {
    this.activeName = str === 'zh' ? 'zh' : 'en';
  }
  ngOnInit() {
    const first = new Meau('首页');
    const count = new Meau('统计');
    const help  = new Meau('帮助');
    const download = new Meau('下载');
    this.meau = [first, count, help, download];
  }
}
