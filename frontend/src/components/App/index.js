// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './App.scss';

// == Import Components
import Footer from 'src/components/Footer';
import NavBar from '../NavBar';
import Page from '../Page';

// == Composant
const App = ({ getServices }) => {
  useEffect(() => {
    getServices();
  }, []);
  return (
    <div className="app">
      <NavBar />
      <Page />
      <Footer />
    </div>
  );
};

App.propTypes = {
  /**
   * Func with no param
   */
  getToken: PropTypes.func.isRequired,
  getServices: PropTypes.func.isRequired,
};


// == Export
export default App;
