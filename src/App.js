import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Layout from "components/layout/Layout";
import React, {Component} from 'react'

class Main extends Component {
  render(){
    return (
      <Layout {...this.props}>
        {this.props.children}
      </Layout>
    )
  }
};

const mapStateToProps = (state) => ({
  session: state.session
});

const App = connect(
  mapStateToProps
)(Main);

export default withRouter(App);
