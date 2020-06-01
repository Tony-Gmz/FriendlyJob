/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// == Import library
import React from 'react';


// == Import components
import RequestAccepteFU from './RequestAccepteFU';
import RequestRefuseFU from './RequestRefuseFU';
import RequestWaitFU from './RequestWaitFU';
import RequestFinishFU from './RequestFinishFU';

// == Import Style
import '../request.scss';

// == Composant
const Request = ({ requestList }) => {
  console.log(requestList);
  return (
    <>
      {requestList.map((request) => {
        switch (request.status) {
          case 'Accepté':
            return <RequestAccepteFU request={request} />;
          case 'Refusé':
            return <RequestRefuseFU request={request} />;
          case 'En attente':
            return <RequestWaitFU request={request} />;
          case 'Terminé':
            return <RequestFinishFU request={request} />;

          default:
            return null;
        }
      })}
    </>
  );
};


// == Export
export default Request;
