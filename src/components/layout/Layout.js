import React, {PropTypes, Component} from 'react'
import Header from "components/layout/Header";
import * as Actions from '../../actions/sessionActionCreator'
import {globalHistory} from "utils/globalHistory";

class Layout extends Component {

  render() {
    const {currentUser} = this.props.session;

    return (
      <div>
        <Header session={this.props.session}/>
        <div className="container top-50">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
