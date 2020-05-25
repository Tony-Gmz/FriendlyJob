import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavStyled from './NavStyled';
import NavButton from '../Button';


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
        <NavLink to=""><li>Devenir Jobworker</li></NavLink>
        <NavLink to=""><li>Qui sommes nous</li></NavLink>
      </ul>
      <div>
        <NavButton />
      </div>
    </div>
  </NavStyled>
);

export default NavBar;
