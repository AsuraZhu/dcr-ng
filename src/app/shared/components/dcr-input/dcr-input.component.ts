import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dcr-input',
  templateUrl: 'dcr-input.component.html',
  styleUrls: ['dcr-input.component.scss']
})
export class DcrInputComponent implements OnInit {
  constructor() {}
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
    this.modelChange.emit(val);
  }
  ngOnInit() {}
}
