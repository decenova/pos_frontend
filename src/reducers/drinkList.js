import * as types from '../constants/drinkList';

const drinkList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case types.SET_DRINK_LIST:
      return {...state, list: action.payload};
    case types.REMOVE_DRINK_LIST:
      return {...state, list: []};
    default:
      return state;
  }
};

export default drinkList;
