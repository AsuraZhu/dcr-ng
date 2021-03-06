import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DcrFootComponent,
  DcrHeadComponent,
  DcrInputComponent
} from './components/index';
import { AttackService } from './AttackService';
import { GtService } from './services';
import { RegisterService } from './services/register.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DcrFootComponent, DcrHeadComponent, DcrInputComponent],
  providers: [AttackService, GtService, RegisterService],
  exports: [
    DcrFootComponent,
    DcrHeadComponent,
    DcrInputComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {}
