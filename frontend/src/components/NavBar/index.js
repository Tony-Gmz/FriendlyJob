import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ModalConnexion from 'src/components/ModalConnexion';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import NavStyled from './NavStyled';
import ModalInscription from '../ModalInscription';

// Styled navbar component reusable

const NavBar = () => {

  const isLogged = true;

  if (isLogged === false) {
    return (
      <NavStyled>
        <Link to="/">
          <div className="nav_title">
            FriendlyJob
          </div>
        </Link>
        <div className="nav_content">
          <ul className="nav_ul">
            <NavLink to="" activeClassName="selected-link"><li>Trouver un job worker</li></NavLink>
            <a href="#inscription"><li>Devenir Jobworker</li></a>
            <NavLink to=""><li>Qui sommes nous</li></NavLink>
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
  return (
        <NavStyled>
        <Link to="/">
          <div className="nav_title">
            FriendlyJob
          </div>
        </Link>
        <div className="nav_content">
          <ul className="nav_ul">
            <NavLink to=""><li>Profil</li></NavLink>
            <NavLink to="" activeClassName="selected-link"><li>Mes demandes</li></NavLink>
            <NavLink to=""><li>Qui sommes nous</li></NavLink>
          </ul>
          <div className="nav_button">
            <NavButtonStyled>Deconnexion</NavButtonStyled>
          </div>
        </div>
       </NavStyled>
  );
};

export default NavBar;
