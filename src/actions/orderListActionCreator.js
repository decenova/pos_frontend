import * as types from '../constants/orderList'
import Network from '../utils/network'

export const fetchOrderList = () => {
  return dispatch => {
    Network().get('orders')
      .then((data) => {
        dispatch({
          type: types.SET_ORDER_LIST,
          payload: data
        })
      })
  }
}