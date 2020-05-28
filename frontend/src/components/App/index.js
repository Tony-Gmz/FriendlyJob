// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './App.scss';

// == Import Components
import Footer from 'src/components/Footer';
import Loader from 'src/components/Loader';
import NavBar from 'src/containers/NavBar';
import Page from '../Page';


// == Composant
const App = ({ getServices, getRandomJobWorker, loading }) => {
  useEffect(() => {
    getServices();
    getRandomJobWorker();
  }, []);
  return (
    <div className="app">
      {loading && <Loader /> }
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
  getRandomJobWorker: PropTypes.func.isRequired,
  getServices: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


// == Export
export default App;
