import React, {PropTypes, Component} from 'react'
import OrderListContainer from 'containers/OrderListContainer'
import AuthComponent from "./AuthComponent";

class OrderListPage extends AuthComponent {
  render() {
    return (
      <AuthComponent>
        <div className='row'>
          <div className='col-sm-12'>
            <OrderListContainer/>
          </div>
        </div>
      </AuthComponent>
    )
  }
}

export default OrderListPage;
