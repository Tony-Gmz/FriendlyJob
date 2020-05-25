// == Import npm
import React from 'react';

// == Import
import './App.scss';
import NavBar from '../NavBar';
import Caroussel from '../Caroussel';
import Presentation from '../Presentation';
import JobPresentation from '../JobPresentation';
import Footer from '../Footer';


// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Caroussel />
    <Presentation />
    <JobPresentation />
    <Footer />
  </div>
);

// == Export
export default App;
