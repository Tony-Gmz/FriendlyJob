// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './App.scss';

// == Import Components
import Footer from 'src/components/Footer';
import Loader from 'src/components/Loader';
// import NavBar from 'src/containers/NavBar';
import Page from 'src/containers/Page';
// import Breadcrumb from 'src/components/BreadCrumb';
import NaviviDad from 'src/containers/NaviviDad';


// == Component App our main component
const App = ({
  getServices,
  getRandomJobWorker,
  loading,
  getUserData,
  getAllDepartments,
}) => {
  // Hook useEffect to load necessary information for our homepage ex: ServiceList for the caroussel
  useEffect(() => {
    getServices();
    getRandomJobWorker();
    getAllDepartments(); // ==================================== ????
    const userToken = localStorage.getItem('jwtToken');
    if (userToken) {
      getUserData();
    }
  }, []);

  return (
    <div className="app">
      {/* condition for the render (if loading print the loader if not print App) */}
      {loading && <Loader />}
      {!loading && (
      <>
        {/*  <NavBar /> */}
        <NaviviDad />
        {/* <Breadcrumb /> */}
        <Page />
        <Footer />
      </>
      )}

    </div>
  );
};

App.propTypes = {
  /**
   * Func with no param
   */
  getUserData: PropTypes.func.isRequired,
  getRandomJobWorker: PropTypes.func.isRequired,
  getServices: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  getAllDepartments: PropTypes.func.isRequired,
};


// == Export
export default App;
