// == Import npm
import React from 'react';


// == Import
import './App.scss';
import JobWorkerList from '../JobWorkerList';
import Footer from 'src/components/Footer'





// == Composant
const App = () => (
  <div className="app">
    <JobWorkerList />
    <div>cards</div>
    <div>pagination + lien modal inscription</div>
    <Footer/> 
  </div>
);

// == Export
export default App;
