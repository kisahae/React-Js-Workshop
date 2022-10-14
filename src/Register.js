import './App.css';
import React from 'react';
import welcome from './welcome-back.jpg';
import logo from './ultrashop.png';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUsername: "",
      newPassword: ""
    }
  }

  onRegister = () => {
    this.props.changePage("login")
  }

  render() {
    return (
      <div className="Register">

        <section className="vh-100">
          <div className="container-fluid" >
            <div className="row">
              <div className="col-sm-6 text-black" id="namaToko">

                <div className="px-5 ms-xl-4">
                  <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
                  <span className="h1 fw-bold mb-0"> <img src={logo} className="registerLogo" alt="logo" />UltraShop</span>
                </div>

                <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                  <form style={{ width: '23rem' }}>

                    <h3 className="fw-normal mb-3 pb-3" >Register</h3>

                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example18" className="form-control form-control-lg" value={this.state.newUsername}
                        onChange={event => this.setState({
                          newUsername: event.target.value
                        })} />
                      <label className="form-label" htmlFor="form2Example18">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example28" className="form-control form-control-lg" value={this.state.newPassword}
                        onChange={event => this.setState({
                          newPassword: event.target.value
                        })} />
                      <label className="form-label" htmlFor="form2Example28">Password</label>
                    </div>

                    <div className="pt-1 mb-4">
                      <button onClick={() => {
                        this.props.username(this.state.newUsername);
                        this.props.password(this.state.newPassword);
                        if (this.state.newPassword === "" || this.state.newUsername === "") {
                          this.setState({
                            newUsername: "",
                            newPassword: ""
                          })
                          alert("Please fill the form")
                        } else {
                          this.onRegister()
                        }
                      }} className="btn btn-info btn-lg btn-block" type="button">Register</button>
                    </div>
                  </form>

                </div>

              </div>
              <div className="col-sm-6 px-0 d-none d-sm-block">
                <img src={welcome}
                  alt="Login image" className="w-100 vh-100" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
