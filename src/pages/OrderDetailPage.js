import React, {PropTypes, Component} from 'react'
import OrderDetailContainer from 'containers/OrderDetailContainer'
import AuthComponent from "./AuthComponent";

class OrderDetailPage extends AuthComponent {
  render() {
    return (
      <AuthComponent>
        <div className='row'>
          <div className='col-sm-6'>
            <OrderDetailContainer match={this.props.match}/>
          </div>
        </div>
      </AuthComponent>
    )
  }
}

export default OrderDetailPage;
