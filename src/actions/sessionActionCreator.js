import {push} from 'react-router-redux';
import * as types from '../constants/session'
import {globalHistory} from '../utils/globalHistory'
import queryString from 'query-string'
import Network from '../utils/network'

export const currentUser = () => {
  return dispatch => {
    Network().get('current_user')
      .then((data) => {
        dispatch({
          type: types.SET_CURRENT_USER,
          payload: data
        })
      })
  }
}

export const loginUser = (email, password) => {
  return dispatch => {
    Network().post('auth/sign_in', {email, password})
      .then((data) => {
        dispatch({
          type: types.SET_CURRENT_USER,
          payload: data.data
        })
        globalHistory.replace('/');
      })
  }
}

export const logoutUser = () => {
  return dispatch => {
    Network().delete('auth/sign_out')
      .then((data) => {
        dispatch({
          type: types.REMOVE_CURRENT_USER,
        })
        localStorage.removeItem('posToken')
        localStorage.removeItem('posClient')
        localStorage.removeItem('posUid')
        globalHistory.replace('/sign_in');
      })
  }
}