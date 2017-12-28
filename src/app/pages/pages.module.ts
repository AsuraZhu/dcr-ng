import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared';
import { DcrNavbarComponent } from './dcr-navbar/dcr-navbar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './index/pages.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DcrNavbarComponent,
  LoginComponent
];
@NgModule({
  declarations: [
    ...PAGES_COMPONENTS
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
  ],
})
export class PagesModule  { }


