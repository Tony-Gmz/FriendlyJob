import React, { Component } from 'react';
import Navbar from 'src/components/NaviviDad/Navivi';


class NaviviDad extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {

    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
      </>
    );
  }
}
export default NaviviDad;
