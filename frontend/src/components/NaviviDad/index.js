import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'src/components/NaviviDad/Navivi';


const NaviviDad = ({
  userData,
  isOpen,
  isNavbarOpen,
  isLogged,
  logOut,
  requestList,
  resetRequestList,
  getRequest,
})=> {
  const handleNavbar = () => {
    isNavbarOpen(!isOpen);
    //console.log(isOpen);
  };

  //console.log(userData);

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
        userData={userData}
      />
    </>
  );
};

NaviviDad.propTypes = {
  userData: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isNavbarOpen: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  requestList: PropTypes.array.isRequired,
  resetRequestList: PropTypes.func.isRequired,
  getRequest: PropTypes.func.isRequired,
};
export default NaviviDad;
