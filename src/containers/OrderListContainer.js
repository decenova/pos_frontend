import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from 'actions/orderListActionCreator'
import OrderList from "components/order/OrderList";

class OrderListContainer extends Component {
  componentWillMount(){
    this.props.dispatch(Actions.fetchOrderList())
  }

  render() {
    return (
      <OrderList list={this.props.orderList}/>
    );
  }
}

const mapStateToProps = (state) => ({
  orderList: state.orderList.list
});


export default connect(
  mapStateToProps
)(OrderListContainer);
