import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from 'actions/drinkListActionCreator'
import FoodList from "components/menu/FoodList";

class FoodListContainer extends Component {
  componentWillMount(){
    this.props.dispatch(Actions.fetchFoodList())
  }

  render() {
    return (
      <FoodList list={this.props.foodList}/>
    );
  }
}

const mapStateToProps = (state) => ({
  foodList: state.foodList.list
});


export default connect(
  mapStateToProps
)(FoodListContainer);
