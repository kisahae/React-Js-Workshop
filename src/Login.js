import './App.css';
import React from 'react';
import logo from './ultrashop.png';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  onLogin = () => {
    if (this.state.username === this.props.data.username && this.state.password === this.props.data.password) {
      this.props.changePage("home")

    }
  }

  onRegister = () => {
    this.props.changePage("register")
  }

  render() {
    return (
      <div className="Login">
        <div id="loginPageContainer">
          <div id="firstPart">
            <img src={logo} className="loginAppLogo" alt="logo" />
            <h1>We are UltraShoppers</h1>
          </div>
          <div id="secondPart">
            <p>Please login to your account</p>
            <label className="labelInLogin">Username</label>
            <input
              value={this.state.username}
              className="inputValueUsername"
              placeholder="Enter Your Username"
              onChange={event => this.setState({
                username: event.target.value
              })}
            />
            <label className="labelInLogin">Password</label>
            <input
              type="password"
              className="inputValuePassword"
              value={this.state.password}
              placeholder="Enter Your Password"
              onChange={event => this.setState({
                password: event.target.value
              })}
            />
            <button className="buttonInLoginPage" onClick={this.onLogin}>
              Login
            </button>
          </div>
          <div id="thirdPart">
            <p>Don't have an account?
            </p>
            <a id="register" onClick={this.onRegister}>
              Register Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
