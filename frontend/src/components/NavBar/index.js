import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import ModalConnexion from 'src/containers/ModalConnexion';
import {Button} from 'semantic-ui-react';
import ModalInscription from 'src/containers/ModalInscription';
import NavStyled from './NavStyled';

// Styled navbar component reusable

const NavBar = ({ isLogged, logOut }) => {
  const handleClick = () => {
    logOut();
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  };

  if (isLogged === false) {
    return (
      <NavStyled>
        <NavLink to="/">
          <div className="nav_title">
            <img className="nav_logo" src="https://res.cloudinary.com/friendlyjob/image/upload/c_scale,h_382,q_100,w_700/v1591563541/friendlyjob/logo_fj_remastered_horizontale_hmbfwl.png" alt="logo" />
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
  if (isLogged === true) {
    return (
      <NavStyled>
        <NavLink to="/">
          <div className="nav_title">
            <img className="nav_logo" src="https://res.cloudinary.com/friendlyjob/image/upload/c_scale,h_382,q_100,w_450/v1591563541/friendlyjob/logo_fj_remastered_horizontale_hmbfwl.png" alt="logo" />
          </div>
        </NavLink>
        <div className="nav_content">
          <ul className="nav_ul">
            <NavLink to="/services" activeClassName="selected-link"><li>Liste de nos services</li></NavLink>
            <NavLink to="/profil"><li>Profil</li></NavLink>
            <NavLink to="/demandes" activeClassName="selected-link"><li>Mes demandes</li></NavLink>
          </ul>
          <div className="nav_button">
            <Link to="/"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }} onClick={handleClick}>Deconnexion</Button></Link>
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
