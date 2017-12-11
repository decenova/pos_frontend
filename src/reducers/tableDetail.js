import * as types from '../constants/tableDetail';

const tableDetail = (state = {
  table: {}
}, action) => {
  switch (action.type) {
    case types.SET_TABLE:
      return {...state, table: action.payload};
    case types.REMOVE_TABLE:
      return {...state, table: {}};
    default:
      return state;
  }
};

export default tableDetail;
