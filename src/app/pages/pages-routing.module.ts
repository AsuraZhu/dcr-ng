import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './index/pages.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent
}, {
  path: 'login',
  component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
