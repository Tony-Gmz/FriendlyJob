// == Import npm
import React, { useEffect } from 'react';

// == Import
import './request.scss';
import RequestFriendlyUser from './RequestFriendlyUser';
import RequestJobWorker from './RequestJobWorker';

// == Composant
const Request = ({ toggle, getRequest, requestList, submitAccepteRequest, submitDeleteRequest, getCommentId, submitFinishRequest, userData }) => {
  useEffect(() => {
    getRequest();
  }, [toggle]);
console.log(userData.firstname);
  const Role = localStorage.getItem('userRole');
  return (
    <div className="request">
      <div className="request_presentation">
        <h2 className="request_presentation_title">Bonjour <span className="span_UserName">{userData.firstname}</span></h2>
        <p>
          Bienvenue sur votre espaces de gestion des demandes.
          A partir cette espace vous pouvez visualiser et gerer vos differentes demandes.
        </p>
      </div>
      {Role === 'FRIENDLY_USER'
        ? <RequestFriendlyUser getRequest={getRequest} requestList={requestList} submitFinishRequest={submitFinishRequest} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />
        : <RequestJobWorker getRequest={getRequest} requestList={requestList} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />}
    </div>
  );
};

// == Export
export default Request;
