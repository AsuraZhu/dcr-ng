import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DcrFootComponent } from './footer/dcr-foot.component';
import { DcrHeadComponent } from './header/dcr-head.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DcrFootComponent,
    DcrHeadComponent
  ],
  providers: [],
  exports: [
    DcrFootComponent,
    DcrHeadComponent
  ]
})
export class SharedModule {

}
