// == Import npm
import React, { useEffect } from 'react';

// == Import
import './request.scss';
import RequestFriendlyUser from './RequestFriendlyUser';
import RequestJobWorker from './RequestJobWorker';

// == Composant
const Request = ({ getRequest, requestList }) => {
  useEffect(() => {
    const userToken = localStorage.getItem('jwtToken');
    if (userToken) {
      getRequest();
    }
  }, []);

}; // fermeture de la const request
  console.log(requestList);

  const Role = localStorage.getItem('userRole');
  return (
    <div className="request">
      {Role === 'FRIENDLY_USER'
        ? <RequestFriendlyUser requestList={requestList} />
        : <RequestJobWorker requestList={requestList} /> }
    </div>
  );
};

// == Export
export default Request;
