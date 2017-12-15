import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared';


const PAGES_COMPONENTS = [
  PagesComponent,
];
@NgModule({
  declarations: [
    ...PAGES_COMPONENTS
  ],
  imports: [
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ],
})
export class PagesModule  { }


