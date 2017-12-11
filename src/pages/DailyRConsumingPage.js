import React, {PropTypes, Component} from 'react'
import AuthComponent from "./AuthComponent";
import DailyConsumingContainer from "containers/DailyConsumingContainer";

class DailyRConsumingPage extends Component {
  render() {
    return (
      <AuthComponent>
        <DailyConsumingContainer/>
      </AuthComponent>
    )
  }
}

export default DailyRConsumingPage;
