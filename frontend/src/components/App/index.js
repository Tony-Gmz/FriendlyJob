// == Import npm
import React from 'react';


import ModalInscription from 'src/components/ModalInscription';
import ModalConnexion from 'src/components/ModalConnexion';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <div><ModalConnexion /></div>
    <div><ModalInscription /></div>
  </div>
);

// == Export
export default App;
