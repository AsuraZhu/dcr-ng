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
  @Input() inputinfo = new DcrInput();
  @Output()
  private event: EventEmitter<DcrInput> = new EventEmitter();
  ngOnInit() {
      this.attackService.attack(100);
   }
}
