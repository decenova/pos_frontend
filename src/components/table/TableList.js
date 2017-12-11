import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class TableList extends Component {
  render() {
    const {list} = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h3>Tables</h3>
          <div className='row'>
            <div className='col-sm-3'><b>Table Number</b></div>
            <div className='col-sm-3'><b>Number of Seat</b></div>
            <div className='col-sm-3'><b>Available</b></div>
            <div className='col-sm-3'><b>Actions</b></div>
          </div>
        </div>
        {
          list.map((table) => {
            return (
              <div className='col-sm-12' key={table.id}>
                <div className='row'>
                  <div className='col-sm-3'>
                    {table.number}
                  </div>
                  <div className='col-sm-3'>
                    {table.number_of_seat}
                  </div>
                  <div className='col-sm-3'>
                    {table.available? "Available" : 'Not Available'}
                  </div>
                  <div className='col-sm-3'>
                    <Link className="nav-link" to={`/tables/${table.id}`}> Order </Link>
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

TableList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default TableList
