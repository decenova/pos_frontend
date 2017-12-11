import React, {Component} from 'react'
import {Field} from 'redux-form'

class Login extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="container-fluid">
        <div className='row top-50'>
          <div className='col-sm-4 offset-sm-4'>
            <form onSubmit={handleSubmit(this.props.onSubmit)} className="">
              <div className='form-group'>
                <label className='control-label'> Email</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder='email'
                  className="form-control"
                />
              </div>

              <div className='form-group'>
                <label className='control-label'> Password </label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder='password'
                  className="form-control"
                />
              </div>

              <div className='form-group'>
                <button type="submit" className="btn btn-primary btn-link-dark signin-btn center-block">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default Login;
