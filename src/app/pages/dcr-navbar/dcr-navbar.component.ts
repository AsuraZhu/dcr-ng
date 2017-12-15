
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dcr-nav',
  templateUrl: './dcr-navbar.component.html',
  styleUrls: ['./dcr-navbar.component.scss']
})
export class DcrNavbarComponent implements OnInit {
  constructor() { }
  activeName = 'zh';
  toggle(str: string): void {
    this.activeName = str === 'zh' ? 'zh' : 'en';
  }
  ngOnInit() { }
}
