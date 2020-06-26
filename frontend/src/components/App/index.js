// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './App.scss';

// == Import Components
import Footer from 'src/components/Footer';
import Loader from 'src/components/Loader';
import Page from 'src/containers/Page';
import NaviviDad from 'src/containers/NaviviDad';


// == Component App our main component
const App = ({
  getServices,
  getRandomJobWorker,
  loading,
  getUserData,
  getAllDepartments,
  getRequest,
}) => {
  // Hook useEffect to load necessary information for our homepage ex: ServiceList for the caroussel
  // getUserData to get user's data after a refresh
  useEffect(() => {
    // if the user is connected the token is store in localStorage
    // if token exist we load getUserData and getRequest
    const userToken = localStorage.getItem('jwtToken');
    if (userToken) {
      getUserData();
      getRequest();
    }
    getServices();
    getRandomJobWorker();
    getAllDepartments();
    // setTimeOut neccessary because
    /* const timer = setTimeout(() => {
      getServices();
      getRandomJobWorker();
      getAllDepartments();
    }, 1000);
    return () => clearTimeout(timer); */
    // ==================================== ????
  }, []);
  return (
    <div className="app">
      {/* condition for the render (if loading print the loader if not print App) */}
      {loading && <Loader />}
      {!loading && (
      <>
        <NaviviDad />
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
  getRequest: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired,
  getRandomJobWorker: PropTypes.func.isRequired,
  getServices: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  getAllDepartments: PropTypes.func.isRequired,
};


// == Export
export default App;
