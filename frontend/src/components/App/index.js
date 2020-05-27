// == Import npm
import React from 'react';


// == Import style
import './App.scss';

// == Import Components
import Footer from 'src/components/Footer';
import NavBar from '../NavBar';
import Page from '../Page';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
