import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // The square brackets are ES6 key interpolation. So whatever gets passed to
      //  prop determines the value of the key below. So we can pass multiple Actions
      //  to this reducer
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
