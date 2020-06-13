import React from 'react';
import Navbar from 'src/components/NaviviDad/Navivi';


const NaviviDad = ({isOpen, isNavbarOpen, isLogged, logOut, requestList, resetRequestList, getRequest})=> {
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
        resetRequestList={resetRequestList}
        getRequest={getRequest}
      />
    </>
  );
};

export default NaviviDad;
