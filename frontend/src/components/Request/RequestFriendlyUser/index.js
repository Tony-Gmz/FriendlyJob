// == Import library
import React, { useEffect } from 'react';


// == Import components
import RequestRefuseFU from './RequestRefuseFU';
import RequestAccepteFU from './RequestAccepteFU';
import RequestWaitFU from './RequestWaitFU';
import RequestFinishFU from './RequestFinishFU';
import RequestCancelFU from './RequestCancelFU';

// == Import Style
import '../request.scss';


// == Composant
const Request = ({ requestSelectedName, requestSortSelected, toggle, requestSelected, getRequest, requestList, submitDeleteRequest, submitFinishRequest, getCommentId  }) => {

/*   useEffect(() => {
    getRequest();
    if (requestSelected !== null) {
      const requestFilterList = requestList.filter(request => request.status === requestSelectedName);
      requestSortSelected(requestFilterList);
    }
  }, [toggle]); */

  if (requestSelected === null) {
    return (
      <>
        {requestList.map((request) => {
          switch (request.status) {
            case 'Acceptée':
              return <RequestAccepteFU request={request} submitFinishRequest={submitFinishRequest} getCommentId={getCommentId} />;
            case 'Refusée':
              return <RequestRefuseFU request={request} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />;
            case 'En attente':
              return <RequestWaitFU request={request} getRequest={getRequest} />;
            case 'Terminée':
              return <RequestFinishFU request={request} />;
            case 'Annulée':
              return <RequestCancelFU request={request} />;

            default:
              return null;
          }
        })}
      </>
    );
  } if (requestSelected !== null) {
    return (
      <>
        {requestSelected.map((request)=> {
          switch (request.status) {
            case 'Acceptée':
              return <RequestAccepteFU request={request} submitFinishRequest={submitFinishRequest} getCommentId={getCommentId} />;
            case 'Refusée':
              return <RequestRefuseFU request={request} submitDeleteRequest={submitDeleteRequest} getCommentId={getCommentId} />;
            case 'En attente':
              return <RequestWaitFU request={request} getRequest={getRequest} />;
            case 'Terminée':
              return <RequestFinishFU request={request} />;
            case 'Annulée':
              return <RequestCancelFU request={request} />;

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
