import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderDetail from "components/order/OrderDetail";
import * as Actions from 'actions/orderDetailActionCreator'

class OrderDetailContainer extends Component {
  componentWillMount(){
    this.props.dispatch(Actions.fetchOrder(this.props.match.params.id))
  }

  updateStatus(id, status){
    this.props.dispatch(Actions.updateOrder(id, status))
  }

  render() {
    return (
      <OrderDetail order={this.props.order} updateStatus={this.updateStatus.bind(this)} {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.orderDetail.order
});

export default connect(mapStateToProps)(OrderDetailContainer);