import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import Login from "components/Login";
import * as Actions from '../actions/sessionActionCreator'

class LoginContainer extends Component {
  loginUser({email, password}) {
    this.props.dispatch(Actions.loginUser(email, password));
  }

  render() {
    return (
      <Login onSubmit={this.loginUser.bind(this)} {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
});


export default connect(
  mapStateToProps
)( reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginContainer));
