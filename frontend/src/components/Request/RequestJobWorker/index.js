// == Import library
import React from 'react';

// == Import components
import RequestCancel from './RequestCancel';
import RequestWait from './RequestWait';
import RequestAccepte from './RequestAccepte';
import RequestRefuse from './RequestRefuse';
import RequestFinish from './RequestFinish';


// == Import Style
import '../request.scss';

// == Composant
const Request = ({ requestList, submitAccepteRequest, submitDeleteRequest, getCommentId }) => {
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
            return <RequestWait request={request} submitAccepteRequest={submitAccepteRequest} getCommentId={getCommentId} />;
          case 'Terminé':
            return <RequestFinish request={request} />;
          case 'Annulé':
            return <RequestCancel request={request} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />;

          default:
            return null;
        }
      })}
    </>
  );
};


// == Export
export default Request;
