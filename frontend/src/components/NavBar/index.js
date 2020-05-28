import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ModalConnexion from 'src/containers/ModalConnexion';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import NavStyled from './NavStyled';
import ModalInscription from '../ModalInscription';

// Styled navbar component reusable

const NavBar = () => {

  const isLogged = false;
  const role = '';

  if (isLogged === false) {
    return (
      <NavStyled>
        <NavLink to="/">
          <div className="nav_title">
            FriendlyJob
          </div>
        </NavLink>
        <div className="nav_content">
          <ul className="nav_ul">
            <NavLink to="/services" activeClassName="selected-link"><li>Liste de nos services</li></NavLink>
            <a href="#inscription"><li>Devenir Jobworker</li></a>
            <NavLink to="/contact"><li>Qui sommes nous</li></NavLink>
          </ul>
          <div className="nav_button">
            <ModalConnexion />
            <ModalInscription />
          </div>
        </div>
      </NavStyled>
    );
  }
  // nav Jobworker
  if (isLogged === true && role === 'jobworker') {
    return (
      <NavStyled>
        <NavLink to="/">
          <div className="nav_title">
            FriendlyJob
          </div>
        </NavLink>
        <div className="nav_content">
          <ul className="nav_ul">
            <NavLink to="/profil"><li>Profil</li></NavLink>
            <NavLink to="/demandes" activeClassName="selected-link"><li>Mes demandes</li></NavLink>
          </ul>
          <div className="nav_button">
            <NavButtonStyled>Deconnexion</NavButtonStyled>
          </div>
        </div>
      </NavStyled>
    );
  }
  if (isLogged === true && role === 'friendly-user') {
    return (
      <NavStyled>
        <NavLink to="/">
          <div className="nav_title">
            FriendlyJob
          </div>
        </NavLink>
        <div className="nav_content">
          <ul className="nav_ul">
            <NavLink to="/services" activeClassName="selected-link"><li>Liste de nos services</li></NavLink>
            <NavLink to="/profil"><li>Profil</li></NavLink>
            <NavLink to="/demandes" activeClassName="selected-link"><li>Mes demandes</li></NavLink>
          </ul>
          <div className="nav_button">
            <NavButtonStyled>Deconnexion</NavButtonStyled>
          </div>
        </div>
      </NavStyled>
    );
  }
};

export default NavBar;
