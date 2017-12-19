import * as loading from './loading';
import * as userinfo from './userinfo';
import { User } from './userinfo/user.class';

export interface State {
  loading: boolean;
  userinfo: User;
}

export const reducer = {
  loading: loading.reducer,
  userinfo:  userinfo.reducer
};


