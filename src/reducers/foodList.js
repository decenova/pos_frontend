import * as types from '../constants/foodList';

const foodList = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case types.SET_FOOD_LIST:
      return {...state, list: action.payload};
    case types.REMOVE_FOOD_LIST:
      return {...state, list: []};
    default:
      return state;
  }
};

export default foodList;
