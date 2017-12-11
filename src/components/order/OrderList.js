import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class OrderList extends Component {
  render() {
    const {list} = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h3>Orders</h3>
          <div className='row'>
            <div className='col-sm-3'><b>Table Number</b></div>
            <div className='col-sm-3'><b>Customer Name</b></div>
            <div className='col-sm-3'><b>Status</b></div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        {
          list.map((order) => {
            return (
              <div className='col-sm-12' key={order.id}>
                <div className='row'>
                  <div className='col-sm-3'>
                    {order.table.number}
                  </div>
                  <div className='col-sm-3'>
                    {order.customer.name}
                  </div>
                  <div className='col-sm-3'>
                    {order.status}
                  </div>
                  <div className='col-sm-3'>
                    <Link className="nav-link" to={`/orders/${order.id}`}> View </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

OrderList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default OrderList
