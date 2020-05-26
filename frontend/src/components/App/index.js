// == Import npm
import React from 'react';


// == Import
import './App.scss';
import Footer from 'src/components/Footer';
import JobPresentation from 'src/components/JobPresentation';
import Presentation from 'src/components/Presentation';
import NavBar from '../NavBar';
import Caroussel from '../Caroussel';
import ErrorPage from '../404';
import JobWorkerList from '../JobWorkerList';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <JobWorkerList />
    <Footer />
  </div>
);

// == Export
export default App;
