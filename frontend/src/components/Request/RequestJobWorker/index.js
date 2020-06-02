/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// == Import library
import React from 'react';

// == Import components
import RequestAccepte from './RequestAccepte';
import RequestRefuse from './RequestRefuse';
import RequestWait from './RequestWait';
import RequestFinish from './RequestFinish';

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
            return <RequestAccepte request={request} />;
          case 'Refusé':
            return <RequestRefuse request={request} />;
          case 'En attente':
            return <RequestWait request={request} />;
          case 'Terminé':
            return <RequestFinish request={request} />;

          default:
            return null;
        }
      })}
    </>
  );
};


// == Export
export default Request;
