import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ModalConnexion from 'src/containers/ModalConnexion';
import ModalInscription from 'src/containers/ModalInscription';
import Logo from 'src/assets/img/logo.png';
import { Navbar, Nav, Button } from 'react-bootstrap';


// Style
import './navBar.scss';

// eslint-disable-next-line consistent-return
const NavBar = ({ isLogged, logOut }) => {
  const handleClick = () => {
    logOut();
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  };

  if (isLogged === false) {
    return (
      <Navbar bg="light" expand="lg">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/services">Liste de nos services</NavLink>
            <a href="#inscription">Devenir JobWorker</a>
          </Nav>
          <Nav className="mr-auto">
            <ModalConnexion />
            <ModalInscription />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  if (isLogged === true) {
    return (
      <Navbar bg="light" expand="lg">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/services">Liste de nos services</NavLink>
            <NavLink to="/profil">profil</NavLink>
            <NavLink to="/demandes" activeClassName="selected-link">Mes demandes</NavLink>
          </Nav>
          <Nav className="mr-auto">
            <Button variant="outline-danger" onClick={handleClick}>Deconnexion</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};
NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  // roles: PropTypes.string.isRequired,
};

export default NavBar;
