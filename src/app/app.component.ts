import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <dcr-foot></dcr-foot>
  `
 ,
})
export class AppComponent implements OnInit {

  title = 'app';
  ngOnInit(): void {
    console.log('初始化');
  }
}
