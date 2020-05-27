import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './page.scss';

import HomePage from '../HomePage';
import Contact from '../Contact';
import ServiceList from '../ServiceList';
import ServiceDetail from '../ServiceDetail';
import JobWorkerList from '../JobWorkerList';
import JobWorkerDetail from '../JobWorkerDetail';
import ProfilFriendlyUser from '../ProfilFriendlyUser';
import ProfilWorkJober from '../ProfilWorkJober';
import Request from '../Request';
import Error from '../Error';


const Page = () => (
  <div className="page">
    <div className="page-content">
      <Switch>
        <Route
          path="/services/aide_a_la_personne/menage"
          exact
        >
          <ServiceDetail />
        </Route>
        <Route
          path="/services/aide_a_la_personne"
          exact
        >
          <ServiceList />
        </Route>
        <Route
          path="/services/detail"
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
          path="/contact"
          exact
        >
          <Contact />
        </Route>
        <Route
          path="/jobworker/thibault"
          exact
        >
          <JobWorkerDetail />
        </Route>
        <Route
          path="/jobworker"
        >
          <JobWorkerList />
        </Route>
        <Route
          path="/demandes"
          exact
        >
          <Request />
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


export default Page;
