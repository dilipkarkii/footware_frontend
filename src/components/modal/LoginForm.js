import React from 'react'

const LoginForm = ({registerClicked}) => {
    return (
        <div>
        <div className="login-form">
          <h2>Login</h2>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Email "
              id="UserName"
              name="email"
            //   value={this.state.email}
            //   onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="form-group log-status">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="Passwod"
              name="password"
            //   value={this.state.password}
            //   onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-lock"></i>
          </div>
          <span className="alert">Invalid Credentials</span>
          <a
            className="link"
            href="#"
            // onClick={this.props.forgotPasswordClicked}
          >
            Lost your password?
          </a>
          <button
            type="button"
            className="log-btn"
            // loading={this.state.loading}
            // onClick={() => this.handleSubmit()}
          >
            Log in
          </button>
          <div
            onClick={registerClicked}
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#c4c4c4",
              cursor: "pointer"
            }}
          >
            New user ? Please Register
          </div>
        </div>
      </div>
    )
}

export default LoginForm
