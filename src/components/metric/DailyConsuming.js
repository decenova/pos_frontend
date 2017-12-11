import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {HOST} from 'utils/constants'

class DailyConsuming extends Component {
  render() {
    const {items, saleReport} = this.props
    return (
      <div>
        <h2>Most Consumed Items</h2>
        {
          items.map((item) => {
            return (
              <div className='row' key={item.name}>
                <div className='col-sm-6'>
                  {item.name}
                </div>
                <div className='col-sm-6'>
                  {item.quantity}
                </div>
              </div>
            )
          })
        }
        <a href={`${HOST}/api/v1/metrics/daily_consumming.pdf`}> Download </a>
        <br/>
        <br/>
        <br/>
        <h2>Total Amount of Sale</h2>
        {
          saleReport.map((item) => {
            return (
              <div className='row' key={item.name}>
                <div className='col-sm-6'>
                  {item.name}
                </div>
                <div className='col-sm-6'>
                  $ {item.amount}
                </div>
              </div>
            )
          })
        }
        <a href={`${HOST}/api/v1/metrics/daily_sale.pdf`}> Download </a>
      </div>
    )
  }
}

DailyConsuming.propTypes = {
  items: PropTypes.array.isRequired,
  saleReport: PropTypes.array.isRequired
}

export default DailyConsuming
