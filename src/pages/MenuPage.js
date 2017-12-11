import React, {PropTypes, Component} from 'react'
import DrinkListContainer from 'containers/DrinkListContainer'
import FoodListContainer from 'containers/FoodListContainer'
import AuthComponent from "./AuthComponent";

class MenuPage extends Component {
  render() {
    return (
      <AuthComponent>
        <div className='row'>
          <div className='col-sm-6'>
            <FoodListContainer/>
          </div>
          <div className='col-sm-6'>
            <DrinkListContainer/>
          </div>
        </div>
      </AuthComponent>
    )
  }
}

export default MenuPage;
