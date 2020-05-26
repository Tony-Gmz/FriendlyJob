// == Import npm
import React from 'react';


// == Import
import './App.scss';
import Footer from 'src/components/Footer';
import ProfilFriendlyUser from 'src/components/ProfilFriendlyUser';
import ProfilWorkJober from 'src/components/ProfilWorkJober';
import NavBar from '../NavBar';
import ServiceDetail from '../ServiceDetail';
import HomePage from '../HomePage';
import JobWorkerList from '../JobWorkerList';
import ServiceList from '../Service/List';
import JobWorkerDetails from '../JobWorkerDetail';
import Request from '../Request';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <HomePage />
    <Footer />
  </div>
);

// == Export
export default App;
