import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import NProgress from 'nprogress';
import { NavigationEnd, NavigationStart} from '@angular/router';

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
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      console.log(NProgress);
      if (event instanceof NavigationStart) {
        NProgress.start();
      }
      if ( event instanceof NavigationEnd) {
        NProgress.done();
      }
    });
  }
}
