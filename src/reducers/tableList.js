import * as types from '../constants/tableList';

const tableList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case types.SET_TABLE_LIST:
      return {...state, list: action.payload};
    case types.REMOVE_TABLE_LIST:
      return {...state, list: []};
    default:
      return state;
  }
};

export default tableList;
