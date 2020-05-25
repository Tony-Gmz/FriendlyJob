// == Import npm
import React from 'react';


// == Import
import './App.scss';
import JobWorkerList from '../JobWorkerList';
import Footer from 'src/components/Footer'
import JobWorkerMain from '../JobWorkerList/JobWorkerMain';
import NavBar from '../NavBar';





// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <JobWorkerList />
    <Footer/> 
  </div>
);

// == Export
export default App;
