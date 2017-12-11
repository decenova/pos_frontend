import * as types from '../constants/tableDetail'
import Network from '../utils/network'
import {globalHistory} from "utils/globalHistory";

export const fetchTable = (id) => {
  return dispatch => {
    Network().get(`tables/${id}`)
      .then((data) => {
        dispatch({
          type: types.SET_TABLE,
          payload: data
        })
      })
  }
}

export const saveOrder = (tableId, customerName, customerPhoneNumber, items) => {
  return dispatch => {
    Network().post('orders', {
      order: {
        table_id: tableId,
        customer_attributes: {name: customerName, phone_number: customerPhoneNumber},
        items: items
      }
    }).then((data) => {
      globalHistory.push(`/orders/${data.id}`)
    })
  }
}