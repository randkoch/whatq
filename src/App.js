import React, { Component } from "react";
import './App.css';
import Router from './components/routes/index'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Router />
        {/* <div id="venderSplash">
          <div>
            <input type="text" placeholder="email"></input> <br />
            <input type="password" placeholder="password"></input> <br />
            <a href="/builder"><button type="submit">Log In</button></a>
          </div>
        </div> */}
      </div >
    )
  };
}


export default App;
