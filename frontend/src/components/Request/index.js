// == Import npm
import React, { useEffect } from 'react';
import { Menu } from 'semantic-ui-react';

// == Import
import './request.scss';
import RequestFriendlyUser from './RequestFriendlyUser';
import RequestJobWorker from './RequestJobWorker';

// == Composant
const Request = ({ resetRequestSelected, requestSelectedName, getRequestSelectedName, requestSelected, requestSortSelected, toggle, getRequest, requestList, submitAccepteRequest, submitDeleteRequest, getCommentId, submitFinishRequest, userData }) => {
  useEffect(() => {
    getRequest();
  }, [toggle]);

  useEffect(() => {
    if (requestSelected !== null) {
      const requestFilterList = requestList.filter(request => request.status === requestSelectedName);
      requestSortSelected(requestFilterList);
    }
  }, [requestList]);


  console.log(requestList);

  console.log(userData.firstname);
  const Role = localStorage.getItem('userRole');

  const handleClick = (evt) => {
    console.log(evt.target.id);
    getRequestSelectedName(evt.target.id);
    const requestFilterList = requestList.filter(request => request.status === evt.target.id);
    requestSortSelected(requestFilterList);
  };

  const handleClickAll = (evt) => {
    console.log(evt.target.id);
    getRequestSelectedName(evt.target.id);
    resetRequestSelected();
    if (requestSelected === null) {
      getRequest();
    }
  };

  console.log(`la categorie selectionée est ${requestSelectedName}`);

  return (
    <div className="request">
      <div className="request_presentation">
        <h2 className="request_presentation_title">Mes demandes</h2>
        <p>
          Dans cet espace vous pouvez visualiser et gérer vos différentes demandes.
        </p>
      </div>
      <Menu tabular className="onglet_request">
        <Menu.Item id="Toutes" active={requestSelectedName === 'Toutes'} onClick={handleClickAll} value="Toutes">Toutes</Menu.Item>
        <Menu.Item id="En attente" active={requestSelectedName === 'En attente'} className="big-button" onClick={handleClick} value="En attente">En attente</Menu.Item>
        <Menu.Item id="Acceptée" active={requestSelectedName === 'Acceptée'} className="big-button" onClick={handleClick} value="Acceptée">Acceptée</Menu.Item>
        <Menu.Item id="Annulée" active={requestSelectedName === 'Annulée'} className="big-button" onClick={handleClick} value="Annulée">Annulée</Menu.Item>
        <Menu.Item id="Terminée" active={requestSelectedName === 'Terminée'} className="big-button" onClick={handleClick} value="Terminée">Terminée</Menu.Item><Menu.Item id="Refusée" active={requestSelectedName === 'Refusée'} className="big-button" onClick={handleClick} value="Refusée">Refusée</Menu.Item>
      </Menu>
      {Role === 'FRIENDLY_USER'
        ? <RequestFriendlyUser requestSelectedName={requestSelectedName} requestSelected={requestSelected} requestSortSelected={requestSortSelected} toggle={toggle} getRequest={getRequest} requestList={requestList} submitFinishRequest={submitFinishRequest} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />
        : <RequestJobWorker requestSelectedName={requestSelectedName} requestSelected={requestSelected} requestSortSelected={requestSortSelected} toggle={toggle} getRequest={getRequest} requestList={requestList} submitAccepteRequest={submitAccepteRequest} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />}
    </div>
  );
};

// == Export
export default Request;
