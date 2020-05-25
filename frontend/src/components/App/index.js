// == Import npm
import React from 'react';

// == Import
import './App.scss';
import NavBar from '../NavBar';
import Caroussel from '../Caroussel';
import Presentation from '../Presentation';


// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Caroussel />
    <Presentation />
  </div>
);

// == Export
export default App;
