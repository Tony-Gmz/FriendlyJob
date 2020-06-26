import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import ModalConnexion from 'src/containers/ModalConnexion';
import ModalInscription from 'src/containers/ModalInscription';

import { useSpring, animated } from 'react-spring';
import './collapseMenu.scss';

const CollapseMenu = ({ isOpen, isLogged, logOut }) => {

  const handleClick = () => {
    logOut();
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  };
  const { open } = useSpring({ open: isOpen ? 0 : 1 });
//console.log(`is open est ${isOpen}`);
  if (isOpen === true) {
    console.log('je suis rentrer dans le if');
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
      {!isLogged && (
        <>
        <NavLinks>
          <Link to="/">Accueil</Link>
          <Link to="/services/">Nos services</Link>
          <a href="#inscription">Devenir JobWorker</a>
          <Link to="/contact/">Contact</Link>
        </NavLinks>
        <NavLinks>
          <ModalConnexion />
          <ModalInscription />
        </NavLinks>
        </>
      )}
      {isLogged && (
        <>
        <NavLinks>
          <Link to="/">accueil</Link> 
          <Link to="/services/">Nos services</Link>
          <a href="/profil/">Profil</a>
          <Link to="/contact/">Contact</Link>
        </NavLinks>
        <NavLinks to="/"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF', margin: 'auto' }} onClick={handleClick}>Deconnexion</Button></NavLinks>
        </>
      )}
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 3rem 1rem 2rem 2rem;
  display: grid;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

   
  }
`;
