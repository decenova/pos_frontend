import * as types from '../constants/orderDetail';

const orderDetail = (state = {
  order: {}
}, action) => {
  switch (action.type) {
    case types.SET_ORDER:
      return {...state, order: action.payload};
    default:
      return state;
  }
};

export default orderDetail;
