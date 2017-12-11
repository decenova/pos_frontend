import * as types from '../constants/orderDetail'
import Network from '../utils/network'
import {globalHistory} from "utils/globalHistory";

export const fetchOrder = (id) => {
  return dispatch => {
    Network().get(`orders/${id}`)
      .then((data) => {
        dispatch({
          type: types.SET_ORDER,
          payload: data
        })
      })
  }
}

export const updateOrder = (id, status) => {
  return dispatch => {
    Network().update(`orders/${id}`, {status: status})
      .then((data) => {
        dispatch({
          type: types.SET_ORDER,
          payload: data
        })
      })
  }
}