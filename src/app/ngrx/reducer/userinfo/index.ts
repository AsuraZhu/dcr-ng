import * as load from '../../action/loading';
import { User } from './user.class';

const initialState: User = new User();

export function reducer(state: User = initialState, action: load.Actions) {
  switch (action.type) {
    case load.SHOW_LOADING: {
      const user = new User();
      user.age = 10;
      user.name = 'name';
      return user;
    }

    case load.HIDE_LOADING: {
      const user = new User();
      user.age = 10;
      user.name = 'HIDE_LOADING';
      console.log(user);
      return user;
    }
    default: {
      return state;
    }
  }
}
export const Userinfo = (state: User) => state;
