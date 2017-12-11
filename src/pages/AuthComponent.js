import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux';
import {globalHistory} from "utils/globalHistory";
import * as Actions from 'actions/sessionActionCreator'

class AuthComponent extends Component {
  componentWillMount() {
    const {currentUser} = this.props.session;

    if (!currentUser && localStorage.getItem('posToken')) {
      this.props.dispatch(Actions.currentUser());
    } else if (!localStorage.getItem('posToken')) {
      globalHistory.replace('/sign_in');
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  session: state.session
});


export default connect(
  mapStateToProps
)(AuthComponent);
