import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from 'actions/tableListActionCreator'
import TableList from "components/table/TableList";

class TableListContainer extends Component {
  componentWillMount(){
    this.props.dispatch(Actions.fetchTableList())
  }

  render() {
    return (
      <TableList list={this.props.tableList}/>
    );
  }
}

const mapStateToProps = (state) => ({
  tableList: state.tableList.list
});


export default connect(
  mapStateToProps
)(TableListContainer);
