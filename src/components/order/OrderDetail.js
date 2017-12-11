import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class OrderDetail extends Component {
  render() {
    const {order} = this.props
    if (!order.id) return (<div></div>)

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h2>Table #{order.table.number}</h2>
        </div>
        <br/>
        <div className='col-sm-12'>
          <div><h3>Customer</h3></div>
          <div><b>Name: {order.customer.name}</b></div>
          <div><b>Phone No:</b> <i>{order.customer.phone_number}</i></div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='col-sm-12'>
          {
            order.order_items.map((item) => {
              return (
                <div className='row' key={item.id}>
                  <div className='col-sm-4'>{item.name}</div>
                  <div className='col-sm-4'>{item.quantity}</div>
                  <div className='col-sm-4'>{item.price}</div>
                </div>
              )
            })
          }
        </div>
        <br/>
        <br/>
        <br/>
        <div className='col-sm-12'>
          <div className='row'>
            <div className='col-sm-4'><b>Total: </b></div>
            <div className='col-sm-4 offset-sm-4'><b>{order.order_items.map((item) => {return parseFloat(item.price)}).reduce(((sum, num) =>{return sum + num}), 0).toFixed(2)}</b></div>
          </div>
        </div>
        <br/>
        <br/>
        <div className='col-sm-12'>
          <div className='row'>
            <div className='col-sm-4'><i>status: </i></div>
            <div className='col-sm-4 offset-sm-4'>
              <select value={order.status} onChange={(e) => {this.props.updateStatus(order.id, e.target.value)}}>
                <option value='booked'>Booked</option>
                <option value='done'>Done</option>
                <option value='paid'>Paid</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OrderDetail.propTypes = {
  order: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired
}

export default OrderDetail
