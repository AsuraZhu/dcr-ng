import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './index/pages.component';
import { RegistComponent } from './register/register.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent
}, {
  path: 'login',
  component: LoginComponent
  }, {
   path: 'register',
   component: RegistComponent
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
