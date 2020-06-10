import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import './page.scss';

import Request from 'src/containers/Request';
import ServiceList from 'src/containers/ServiceList';
import ServiceDetail from 'src/containers/ServiceDetail';
import JobWorkerDetail from 'src/containers/JobWorkerDetail';
import JobWorkerList from 'src/containers/JobWorkerList';
import Profil from 'src/containers/Profil';
import HomePage from '../HomePage';
import Contact from '../Contact';

import Error from '../Error';


const Page = ({ isLogged }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="page">
      <div className="page-content">
        <Switch>
          <Route
            path="/services/:slug/jobworkers/jobworker_:id"
            exact
          >
            <JobWorkerDetail /> 
          </Route>
          <Route
            path="/services/:slug/jobworker_:id"
            exact
          >
            <JobWorkerDetail />
          </Route>
          <Route
            path="/services/:slug/jobworkers/"
            exact
          >
            <JobWorkerList />
          </Route>
          <Route
            path="/services/:slug"
            exact
          >
            <ServiceDetail />
          </Route>
          <Route
            path="/services"
            exact
          >
            <ServiceList />
          </Route>
          <Route
            path="/demandes"
            exact
          >
            {isLogged === true
              ? <Request />
              : <Error />}
          </Route>
          <Route
            path="/profil"
            exact
          >
            {isLogged === true
              ? <Profil />
              : <Error />}
          </Route>
          <Route
            path="/contact"
            exact
          >
            <Contact />
          </Route>
          <Route
            path="/"
            exact
          >
            <HomePage />
          </Route>
          <Route
            path="*"
            exact
          >
            <Error />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
Page.propTypes = {
  serviceList: PropTypes.array.isRequired,
};

export default Page;
