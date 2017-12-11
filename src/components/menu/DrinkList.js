import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class DrinkList extends Component {
  render() {
    const {list} = this.props

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h3>Drink</h3>
        </div>
        {
          list.map((drink) => {
            return (
              <div className='col-sm-12' key={drink.id}>
                <div className='row'>
                  <div className='col-sm-6'>
                    {drink.name}
                  </div>
                  <div className='col-sm-6'>
                    $ {drink.price}
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

DrinkList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default DrinkList
