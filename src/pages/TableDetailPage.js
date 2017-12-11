import React, {PropTypes, Component} from 'react'
import TableDetailContainer from 'containers/TableDetailContainer'
import AuthComponent from "./AuthComponent";

class TableDetailPage extends AuthComponent {
  render() {
    return (
      <AuthComponent>
        <div className='row'>
          <div className='col-sm-6'>
            <TableDetailContainer match={this.props.match}/>
          </div>
        </div>
      </AuthComponent>
    )
  }
}

export default TableDetailPage;
