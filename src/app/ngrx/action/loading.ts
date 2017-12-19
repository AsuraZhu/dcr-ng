import {Action} from '@ngrx/store';
import { User } from '../reducer/userinfo/user.class';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export class HideAction implements Action {
  readonly type = HIDE_LOADING;
  constructor(public payload: User) { }
}

export class ShowAction implements Action {
  readonly type = SHOW_LOADING;
}

export type Actions = ShowAction | HideAction;
