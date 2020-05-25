import React from 'react';
import { Link } from 'react-router-dom';
import NavStyled from './NavStyled';
import NavButton from '../Button';


const NavBar = () => (

  <NavStyled>
    <div className="nav_title">
      FriendlyJob
    </div>
    <div className="nav_content">
      <ul className="nav_ul">
        <Link><li>Trouver un job worker</li></Link>
        <Link><li>Devenir Jobworker</li></Link>
        <Link><li>Qui sommes nous</li></Link>
      </ul>
      <div>
        <NavButton />
      </div>
    </div>
  </NavStyled>
);

export default NavBar;
