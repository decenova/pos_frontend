import * as types from '../constants/orderList';

const orderList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case types.SET_ORDER_LIST:
      return {...state, list: action.payload};
    case types.REMOVE_ORDER_LIST:
      return {...state, list: []};
    default:
      return state;
  }
};

export default orderList;
