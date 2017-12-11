import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class FoodList extends Component {
  render() {
    const {list} = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h3>Food</h3>
        </div>
        {
          list.map((food) => {
            return (
              <div className='col-sm-12' key={food.id}>
                <div className='row'>
                  <div className='col-sm-6'>
                    {food.name}
                  </div>
                  <div className='col-sm-6'>
                    $ {food.price}
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

FoodList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default FoodList
