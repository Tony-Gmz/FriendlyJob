// == Import npm
import React, { useEffect } from 'react';

// == Import
import './request.scss';
import RequestFriendlyUser from './RequestFriendlyUser';
import RequestJobWorker from './RequestJobWorker';

// == Composant
const Request = ({ requestSelected, requestSortSelected, toggle, getRequest, requestList, submitAccepteRequest, submitDeleteRequest, getCommentId, submitFinishRequest, userData }) => {
  useEffect(() => {
    getRequest();
  }, [toggle]);
  console.log(requestList);

  console.log(userData.firstname);
  const Role = localStorage.getItem('userRole');

  const handleClick = (evt) => {
    console.log(evt.target.value);
    const requestFilterList = requestList.filter(request => request.status === evt.target.value);
    console.log(requestFilterList);
    requestSortSelected(requestFilterList);
  };

  return (
    <div className="request">
      <div className="request_presentation">
        <h2 className="request_presentation_title">Bonjour <span className="span_UserName">{userData.firstname}</span></h2>
        <p>
          Bienvenue sur votre espaces de gestion des demandes.
          A partir cette espace vous pouvez visualiser et gerer vos differentes demandes.
        </p>
      </div>
      <div className="buttonForSort">
        <button onClick={handleClick} type="button" value="Terminée">Terminée</button>
        <button onClick={handleClick} type="button" value="En attente">En attente</button>
        <button onClick={handleClick} type="button" value="Annulée">Annulée</button>
        <button onClick={handleClick} type="button" value="Acceptée">Acceptée</button>
        <button onClick={handleClick} type="button" value="Refusée">Refusée</button>
      </div>
      {Role === 'FRIENDLY_USER'
        ? <RequestFriendlyUser requestSelected={requestSelected} requestSortSelected={requestSortSelected} toggle={toggle} getRequest={getRequest} requestList={requestList} submitFinishRequest={submitFinishRequest} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />
        : <RequestJobWorker requestSelected={requestSelected} requestSortSelected={requestSortSelected} toggle={toggle} getRequest={getRequest} requestList={requestList} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />}
    </div>
  );
};

// == Export
export default Request;
