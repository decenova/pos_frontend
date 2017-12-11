import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import * as Actions from '../actions/sessionActionCreator'

class LogoutContainer extends Component {
  logoutUser() {
    this.props.dispatch(Actions.logoutUser());
  }

  render() {
    return (
      <a className="nav-link" href='#' onClick={this.logoutUser.bind(this)}> Logout </a>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(
  mapStateToProps
)(LogoutContainer)

