// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './App.scss';

// == Import Components
import Footer from 'src/components/Footer';
import Loader from 'src/components/Loader';
import NavBar from 'src/containers/NavBar';
import Page from 'src/containers/Page';


// == Composant
const App = ({ getServices, getRandomJobWorker, loading, getUserData, getAllDepartments, getRequest }) => {
  useEffect(() => {
    getServices();
    getRandomJobWorker();
    getAllDepartments();
    const userToken = localStorage.getItem('jwtToken');
    if (userToken) {
      getUserData();
    }
  }, []);

  return (
    <div className="app">
      {loading && <Loader />}
      {!loading && (
      <>
        <NavBar />
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
