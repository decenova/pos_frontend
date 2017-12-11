import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Field} from 'redux-form';

class TableDetail extends Component {
  render() {
    const {table, handleSubmit} = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h3>Table #{table.number}</h3>
        </div>
        <div className='col-sm-12'>
          <form onSubmit={handleSubmit(this.props.onSubmit)}>
            <div className="form-group">
              <label className="control-label">Customer Name</label>
              <Field
                name="customer_name"
                component="input"
                type="text"
                placeholder='name'
                className="form-control"
              />
            </div>
            <div className='form-group'>
              <label className="control-label">Customer Phone Number</label>
              <Field
                name="customer_phone_number"
                component="input"
                type="text"
                placeholder='phone number'
                className="form-control"
              />
            </div>
            <div className='form-group row'>
              <div className='col-sm-12'><h3>Drinks</h3></div>
              {
                this.props.drinkList.map((drink) => {
                  return (
                    <div className='col-sm-12 top-10' key={drink.id}>
                      <div className='row'>
                        <div className='col-sm-6'>
                          {drink.name}
                        </div>
                        <div className='col-sm-2'>
                          $ {drink.price}
                        </div>
                        <div className='col-sm-4'>
                          <Field
                            name={`items[${drink.id}]`}
                            component="input"
                            type="number"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className='form-group row'>
              <div className='col-sm-12'><h3>Food</h3></div>
              {
                this.props.foodList.map((food) => {
                  return (
                    <div className='col-sm-12 top-10' key={food.id}>
                      <div className='row'>
                        <div className='col-sm-6'>
                          {food.name}
                        </div>
                        <div className='col-sm-2'>
                          $ {food.price}
                        </div>
                        <div className='col-sm-4'>
                          <Field
                            name={`items[${food.id}]`}
                            component="input"
                            type="number"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className='form-group'>
              <button type="submit" className="btn btn-primary">Order</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

TableDetail.propTypes = {
  table: PropTypes.object.isRequired,
  drinkList: PropTypes.array.isRequired,
  foodList: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default TableDetail
