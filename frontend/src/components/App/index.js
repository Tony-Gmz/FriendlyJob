// == Import npm
import React from 'react';


import ModalInscription from 'src/components/ModalInscription';
import ModalConnexion from 'src/components/ModalConnexion';

// == Import
import './App.scss';
import JobWorkerList from '../JobWorkerList';




// == Composant
const App = () => (
  <div className="app">
    <JobWorkerList />
    <div>cards</div>
    <div>pagination + lien modal inscription</div>
    <div>footer</div>
  </div>
);

// == Export
export default App;
