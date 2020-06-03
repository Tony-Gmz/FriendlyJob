// == Import library
import React from 'react';


// == Import components
import RequestRefuseFU from './RequestRefuseFU';
import RequestAccepteFU from './RequestAccepteFU';
import RequestWaitFU from './RequestWaitFU';
import RequestFinishFU from './RequestFinishFU';
import RequestCancelFU from './RequestCancelFU';

// == Import Style
import '../request.scss';


// == Composant
const Request = ({ requestList, submitDeleteRequest, getCommentId  }) => {
  console.log(requestList);
  return (
    <>
      {requestList.map((request) => {
        switch (request.status) {
          case 'Accepté':
            return <RequestAccepteFU request={request} />;
          case 'Refusé':
            return <RequestRefuseFU request={request} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />;
          case 'En attente':
            return <RequestWaitFU request={request} />;
          case 'Terminé':
            return <RequestFinishFU request={request} />;
          case 'Annulé':
            return <RequestCancelFU request={request} />;

          default:
            return null;
        }
      })}
    </>
  );
};


// == Export
export default Request;
