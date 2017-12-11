import React, {PropTypes, Component} from 'react'
import LogoutContainer from "containers/LogoutContainer";
import {Link, NavLink} from 'react-router-dom'

class Header extends Component {
  render() {
    let {currentUser} = this.props.session
    let logoutButton = <ul className="navbar-nav pull-right">
      <li className="nav-item">
        <a className="nav-link" href="#"> {currentUser ? currentUser.name : ''} </a>
      </li>
      <li className="nav-item">
        <LogoutContainer/>
      </li>
    </ul>

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
          <NavLink className="navbar-brand" to='/'>AB Restaurant </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {
              currentUser ? (
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/menu'>Menu </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/tables'>Tables </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/orders'>Orders </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/metrics/daily_consumming'>Daily Consuming </NavLink>
                  </li>
                </ul>
              ) : (<span></span>)
            }
            {currentUser ? logoutButton : ''}
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  session: PropTypes.object.isRequired,
};

export default Header;
