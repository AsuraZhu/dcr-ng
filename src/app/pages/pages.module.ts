import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared';
import { DcrNavbarComponent } from './dcr-navbar/dcr-navbar.component';
import { LoginComponent } from './login/login.component';



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
  ],
  exports: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
  ],
})
export class PagesModule  { }


