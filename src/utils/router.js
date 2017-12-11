import {Provider} from 'react-redux';
import store from '../store/store';
import App from '../App';
import Pages from '../pages';
import {Route, Router, Switch, withRouter} from 'react-router-dom'
import {globalHistory} from "utils/globalHistory";
import LoginContainer from "containers/LoginContainer";
import React from 'react'


const router = (
  <Provider store={store}>
    <Router history={globalHistory}>
      <App>
        <Switch>
          <Route exact path="/" component={Pages.LandingPage}/>
          <Route exact path="/menu" component={Pages.MenuPage}/>
          <Route exact path="/tables" component={Pages.TableListPage}/>
          <Route exact path="/tables/:id" component={Pages.TableDetailPage}/>
          <Route exact path="/orders" component={Pages.OrderListPage}/>
          <Route exact path="/orders/:id" component={Pages.OrderDetailPage}/>
          <Route exact path="/metrics/daily_consumming" component={Pages.DailyRConsumingPage}/>
          <Route exact path="/sign_in" component={LoginContainer}/>
        </Switch>
      </App>
    </Router>
  </Provider>
);

export default router;
