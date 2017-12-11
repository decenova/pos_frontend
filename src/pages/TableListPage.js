import React, {PropTypes, Component} from 'react'
import TableListContainer from 'containers/TableListContainer'
import AuthComponent from "./AuthComponent";

class TableListPage extends AuthComponent {
  render() {
    return (
      <AuthComponent>
        <div className='row'>
          <div className='col-sm-12'>
            <TableListContainer/>
          </div>
        </div>
      </AuthComponent>
    )
  }
}

export default TableListPage;
