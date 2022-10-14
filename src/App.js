import './App.css';
import React from 'react';
import Login from "./Login"
import Home from "./Home"
import FirstPage from "./firstPage"
import Register from "./Register"
import Filtered from "./Filtered"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "123",
      password: "123",
      page: "firstPage"
    }
  }

  changePage = newPage => {
    this.setState({ page: newPage })
  }

  changeUsername = newUsername => {
    this.setState({ username: newUsername })
  }

  changePassword = newPassword => {
    this.setState({ password: newPassword })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.page === "login" ?
            <Login
              changePage={this.changePage}
              data={this.state}
            /> :
            this.state.page === "home" ?
              <Home
                changePage={this.changePage}
              /> :
              this.state.page === "firstPage" ?
                <FirstPage
                  changePage={this.changePage}
                /> :
                this.state.page === "filtered" ?
                  <Filtered />
                  :
                  <Register
                    changePage={this.changePage}
                    username={this.changeUsername}
                    password={this.changePassword}
                  />}
      </div>
    );
  }
}

export default App;
