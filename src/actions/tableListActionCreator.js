import * as types from '../constants/tableList'
import Network from '../utils/network'

export const fetchTableList = () => {
  return dispatch => {
    Network().get('tables')
      .then((data) => {
        dispatch({
          type: types.SET_TABLE_LIST,
          payload: data
        })
      })
  }
}