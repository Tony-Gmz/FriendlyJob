// == Import npm
import React, { useEffect } from 'react';

// == Import
import './request.scss';
import RequestFriendlyUser from './RequestFriendlyUser';
import RequestJobWorker from './RequestJobWorker';

// == Composant
const Request = ({ getRequest, requestList, submitAccepteRequest, submitDeleteRequest, getCommentId }) => {
  useEffect(() => {
    getRequest();
  });

  const Role = localStorage.getItem('userRole');
  return (
    <div className="request">
      {Role === 'FRIENDLY_USER'
        ? <RequestFriendlyUser getRequest={getRequest} requestList={requestList} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />
        : <RequestJobWorker getRequest={getRequest} requestList={requestList} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />}
    </div>
  );
};

// == Export
export default Request;
