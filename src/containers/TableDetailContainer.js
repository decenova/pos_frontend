import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableDetail from "components/table/TableDetail";
import {reduxForm} from "redux-form";
import * as Actions from 'actions/tableDetailActionCreator'
import * as refresmentActions from 'actions/drinkListActionCreator'
import compact from 'compact-object'

class TableDetailContainer extends Component {
  componentWillMount(){
    this.props.dispatch(Actions.fetchTable(this.props.match.params.id))
    this.props.dispatch(refresmentActions.fetchDrinkList())
    this.props.dispatch(refresmentActions.fetchFoodList())
  }

  createOrder({items, customer_name, customer_phone_number}){
    const tableId = this.props.match.params.id
    this.props.dispatch(Actions.saveOrder(tableId, customer_name, customer_phone_number, compact(items)))
  }

  render() {
    return (
      <TableDetail table={this.props.table} onSubmit={this.createOrder.bind(this)} {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  table: state.tableDetail.table,
  drinkList: state.drinkList.list,
  foodList: state.foodList.list
});

export default connect(mapStateToProps)(reduxForm({
  form: 'TableDetailForm',
})(TableDetailContainer));