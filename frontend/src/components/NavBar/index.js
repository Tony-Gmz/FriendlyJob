import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ModalConnexion from 'src/components/ModalConnexion';
import NavStyled from './NavStyled';
import ModalInscription from '../ModalInscription';


// Styled navbar component reusable 

const NavBar = () => (

  <NavStyled>
    <Link to="/">
      <div className="nav_title">
        FriendlyJob
      </div>
    </Link>
    <div className="nav_content">
      <ul className="nav_ul">
        <NavLink to="" activeClassName="selected"><li>Trouver un job worker</li></NavLink>
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

export default NavBar;
