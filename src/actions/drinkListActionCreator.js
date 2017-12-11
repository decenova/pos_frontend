import * as types from '../constants/drinkList'
import * as foodActionTypes from '../constants/foodList'
import Network from '../utils/network'

export const fetchDrinkList = () => {
  return dispatch => {
    Network().get('drinks')
      .then((data) => {
        dispatch({
          type: types.SET_DRINK_LIST,
          payload: data
        })
      })
  }
}

export const fetchFoodList = () => {
  return dispatch => {
    Network().get('foods')
      .then((data) => {
        dispatch({
          type: foodActionTypes.SET_FOOD_LIST,
          payload: data
        })
      })
  }
}