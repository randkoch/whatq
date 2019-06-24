import React, { Component } from "react";

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <header><img alt="logo" src="../logo.svg" />whatQ</header>
    )
  };
}


export default Header;
