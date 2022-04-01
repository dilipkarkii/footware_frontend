import React from 'react'

const RegisterForm = ({loginClicked}) => {
    return (
        <div>
        <div className="login-form">
          <h2>Register</h2>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Name "
              id="name"
              name="name"
            //   value={this.state.name}
            //   onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-user"></i>
          </div>

          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Email "
              id="email"
              name="email"
            //   value={this.state.email}
            //   onChange={this.handleChange}
              autoComplete="false"
            />
            <i className="fa fa-envelope"></i>
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
          <button
            type="button"
            className="log-btn"
            // loading={this.state.loading}
            // onClick={() => this.handleSubmit()}
          >
            Register
          </button>
          <div
            onClick={loginClicked}
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#c4c4c4",
              cursor: "pointer"
            }}
          >
            Already have an account ? Please login.
          </div>
        </div>
      </div>
    )
}

export default RegisterForm
