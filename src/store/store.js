import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger'

const middlewares = [thunk, promiseMiddleware()];

const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares, createLogger()),
  ...enhancers
);

const store = createStore(
  rootReducer,
  {},
  composedEnhancers,
);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

if (module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
