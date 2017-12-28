import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter} from '@angular/core';
import { DcrInput } from './dcrinput';
import { AttackService } from '../../AttackService';




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dcr-input',
  templateUrl: 'dcr-input.component.html',
  styleUrls: ['dcr-input.component.scss'],
})
export class DcrInputComponent implements OnInit {
  constructor(private attackService: AttackService) { }
  @Input() type = 'text';
  @Input() value: string | number = '';
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() icon = '';
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  handleInput(val: string): void {
    this.value = val;
    console.log('执行');
    this.modelChange.emit(val);

  }
  ngOnInit() {
      this.attackService.attack(100);
      console.log(this);
   }
}
