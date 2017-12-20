import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AttackService {

  constructor() { }
  private damageSource = new Subject<number>();

  damage$ =  this.damageSource.asObservable();
  attack(damage: number) {
    this.damageSource.next(damage);
  }
}
