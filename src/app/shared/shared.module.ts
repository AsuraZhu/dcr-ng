import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DcrFootComponent } from './footer/dcr-foot.component';
import { DcrHeadComponent } from './header/dcr-head.component';
import { DcrInputComponent } from './dcr-input/dcr-input.component';
import { AttackService } from './AttackService';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DcrFootComponent,
    DcrHeadComponent,
    DcrInputComponent
  ],
  providers: [
    AttackService
  ],
  exports: [
    DcrFootComponent,
    DcrHeadComponent,
    DcrInputComponent,
    CommonModule
  ]
})
export class SharedModule {

}
