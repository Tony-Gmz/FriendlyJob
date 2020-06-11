// == Import library
import React, { useEffect } from 'react';

// == Import components
import RequestCancel from './RequestCancel';
import RequestWait from './RequestWait';
import RequestAccepte from './RequestAccepte';
import RequestRefuse from './RequestRefuse';
import RequestFinish from './RequestFinish';


// == Import Style
import '../request.scss';

// == Composant
const Request = ({ requestSelected, requestSortSelected, toggle, getRequest, requestList, submitAccepteRequest, submitDeleteRequest, getCommentId }) => {
  useEffect(() => {
    getRequest();
  }, [requestSelected]);


  if (requestSelected === null) {
    return (
      <>
        {requestList.map((request) => {
          switch (request.status) {
            case 'Acceptée':
              return <RequestAccepte request={request} />;
            case 'Refusée':
              return <RequestRefuse request={request} />;
            case 'En attente':
              return <RequestWait request={request} submitAccepteRequest={submitAccepteRequest} getCommentId={getCommentId} />;
            case 'Terminée':
              return <RequestFinish request={request} />;
            case 'Annulée':
              return <RequestCancel request={request} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />;

            default:
              return null;
          }
        })}
      </>
    );
  }
  if (requestSelected !== null) {
    return (
      <>
        {requestSelected.map((request) => {
          switch (request.status) {
            case 'Acceptée':
              return <RequestAccepte request={request} />;
            case 'Refusée':
              return <RequestRefuse request={request} />;
            case 'En attente':
              return <RequestWait request={request} submitAccepteRequest={submitAccepteRequest} getCommentId={getCommentId} />;
            case 'Terminée':
              return <RequestFinish request={request} />;
            case 'Annulée':
              return <RequestCancel request={request} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />;

            default:
              return null;
          }
        })}
      </>
    );
  }
};

// == Export
export default Request;
