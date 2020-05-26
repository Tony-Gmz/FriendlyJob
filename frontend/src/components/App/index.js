// == Import npm
import React from 'react';


// == Import
import './App.scss';
import Footer from 'src/components/Footer';
import NavBar from '../NavBar';
import ServiceDetail from '../ServiceDetail';


// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <ServiceDetail />
    <Footer />
  </div>
);

// == Export
export default App;
