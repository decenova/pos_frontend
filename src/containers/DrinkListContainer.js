import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from 'actions/drinkListActionCreator'
import DrinkList from "components/menu/DrinkList";

class DrinkListContainer extends Component {
  componentWillMount(){
    this.props.dispatch(Actions.fetchDrinkList())
  }

  render() {
    return (
      <DrinkList list={this.props.drinkList}/>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkList: state.drinkList.list
});


export default connect(
  mapStateToProps
)(DrinkListContainer);
