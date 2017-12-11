import * as types from '../constants/dailyConsuming';

const dailyConsuming = (state = {
  items: [],
  saleReport: []
}, action) => {
  switch (action.type) {
    case types.SET_CONSUMED_ITEM:
      return {...state, items: action.payload};
    case types.SET_SALE_REPORT:
      return {...state, saleReport: action.payload};
    default:
      return state;
  }
};

export default dailyConsuming;
