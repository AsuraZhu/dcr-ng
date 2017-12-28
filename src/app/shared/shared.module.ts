import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DcrFootComponent, DcrHeadComponent, DcrInputComponent } from './components/index';
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
