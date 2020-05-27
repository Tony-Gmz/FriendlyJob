// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './App.scss';
import Footer from 'src/components/Footer';
import NavBar from '../NavBar';
import HomePage from '../HomePage';


// == Composant
const App = ({ getToken }) => {

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
};

App.propTypes = {
  /**
   * Func with no param
   */
  getToken: PropTypes.func.isRequired,
};


// == Export
export default App;
