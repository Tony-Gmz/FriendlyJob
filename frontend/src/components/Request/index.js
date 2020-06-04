// == Import npm
import React, { useEffect } from 'react';

// == Import
import './request.scss';
import RequestFriendlyUser from './RequestFriendlyUser';
import RequestJobWorker from './RequestJobWorker';

// == Composant
const Request = ({ getRequest, requestList, submitAccepteRequest, submitDeleteRequest, getCommentId }) => {
  useEffect(() => {
    const userToken = localStorage.getItem('jwtToken');
    if (userToken) {
      getRequest();
    }
  }, []);

  const Role = localStorage.getItem('userRole');
  return (
    <div className="request">
      {Role === 'FRIENDLY_USER'
        ? <RequestFriendlyUser requestList={requestList} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />
        : <RequestJobWorker requestList={requestList} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />}
    </div>
  );
};

// == Export
export default Request;
