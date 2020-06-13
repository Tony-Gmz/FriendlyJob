import React from 'react';
import Navbar from 'src/components/NaviviDad/Navivi';


const NaviviDad = ({isOpen, isNavbarOpen, isLogged, logOut, requestList})=> {
  const handleNavbar = () => {
    isNavbarOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <Navbar
        isOpen={isOpen}
        handleNavbar={handleNavbar}
        isLogged={isLogged}
        logOut={logOut}
        requestList={requestList}
      />
    </>
  );
};

export default NaviviDad;
