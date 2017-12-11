import * as types from '../constants/dailyConsuming'
import Network from '../utils/network'
import {globalHistory} from "utils/globalHistory";

export const fetchConsumingItems = () => {
  return dispatch => {
    Network().get('metrics/daily_consumming')
      .then((data) => {
        dispatch({
          type: types.SET_CONSUMED_ITEM,
          payload: data
        })
      })
  }
}

export const fetchSaleReport = () => {
  return dispatch => {
    Network().get('metrics/daily_sale')
      .then((data) => {
        dispatch({
          type: types.SET_SALE_REPORT,
          payload: data
        })
      })
  }
}