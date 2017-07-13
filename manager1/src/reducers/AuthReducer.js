import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //Create a new object with what is currently in state, and then throw
      // the new email into the new object
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
