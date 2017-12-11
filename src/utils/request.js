import store from "../store/store";
import {FETCHING_COMPLETE, FETCHING_DATA} from "actions/actionCreators";

export default function request(url, options) {
  store.dispatch({type: FETCHING_DATA});
  return new Promise((resolve, reject) => {
    if (!url) reject(new Error('URL parameter required'));
    if (!options) reject(new Error('Options parameter required'));

    let defaultOptions = {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token-type': 'Bearer',
        'access-token': localStorage.getItem('posToken'),
        'client': localStorage.getItem('posClient'),
        'uid': localStorage.getItem('posUid')
      }
    }

    options = {...options, ...defaultOptions}

    fetch(url, options)
      .then(response => {
        // update token, uid and client_id in browser storage
        let uid = response.headers.get('uid')
        let accessToken = response.headers.get('access-token')
        let client = response.headers.get('client')

        if (accessToken){
          localStorage.setItem('posToken', accessToken)
          localStorage.setItem('posClient', client)
          localStorage.setItem('posUid', uid)
        }

        return response.json()
      })
      .then(response => {
        if (response.errors) reject(response.errors);
        else resolve(response);
        store.dispatch({type: FETCHING_COMPLETE});
      })
      .catch(reject)
  });
}
