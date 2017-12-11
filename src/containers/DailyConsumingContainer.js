import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from 'actions/dailyConsumingActionCreator'
import DailyConsuming from "components/metric/DailyConsuming";

class DailyConsumingContainer extends Component {
  componentWillMount(){
    this.props.dispatch(Actions.fetchConsumingItems())
    this.props.dispatch(Actions.fetchSaleReport())
  }

  render() {
    return (
      <DailyConsuming items={this.props.items} saleReport={this.props.saleReport}/>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.dailyConsuming.items,
  saleReport: state.dailyConsuming.saleReport
});

export default connect(mapStateToProps)(DailyConsumingContainer);