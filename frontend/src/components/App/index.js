// == Import npm
import React from 'react';

// == Import
import './App.scss';
import NavBar from '../NavBar';
import Caroussel from '../Caroussel';


// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Caroussel />
  </div>
);

// == Export
export default App;
