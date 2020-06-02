// == Import npm
import React, { useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';

// == Import
import './request.scss';
import ModalExampleCloseConfig from '../ModalComment';


// == Composant
const Request = ({ getRequest }) => {
  useEffect(() => {
    getRequest();
  }, []);

}; // fermeture de la const request
// == Export
export default Request;
