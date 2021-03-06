import * as types from '../constants/session';

const session = (state = {
  currentUser: null
}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {...state, currentUser: action.payload};
    case types.REMOVE_CURRENT_USER:
      return {...state, currentUser: null};
    default:
      return state;
  }
};

export default session;
