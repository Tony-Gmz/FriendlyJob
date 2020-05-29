import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import ModalConnexion from 'src/containers/ModalConnexion';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import ModalInscription from 'src/containers/ModalInscription';
import NavStyled from './NavStyled';


// Styled navbar component reusable

const NavBar = ({ isLogged }) => {

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
 /*  if (isLogged === true && roles === 'jobworker') {
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
  } */
  if (isLogged === true) {
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

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  // roles: PropTypes.string.isRequired,
};

export default NavBar;
