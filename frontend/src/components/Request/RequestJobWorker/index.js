// == Import library
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components
import RequestCancel from './RequestCancel';
import RequestWait from './RequestWait';
import RequestAccepte from './RequestAccepte';
import RequestRefuse from './RequestRefuse';
import RequestFinish from './RequestFinish';


// == Import Style
import '../request.scss';

// == Composant
const Request = ({
  requestSelectedName,
  requestSelected,
  requestSortSelected,
  toggle,
  getRequest,
  requestList,
  submitAccepteRequest,
  submitDeleteRequest,
  getRequestId,
}) => {
  useEffect(() => {
    getRequest();
    if (requestSelected !== '') {
      const requestFilterList = requestList.filter((request) => request.status === requestSelectedName);
      requestSortSelected(requestFilterList);
    }
  }, [toggle]);

  if (requestSelected === null) {
    return (
      <div className="requestList_container">
        {requestList.map((request) => {
          switch (request.status) {
            case 'Acceptée':
              return <RequestAccepte request={request} getRequestId={getRequestId} />;
            case 'Refusée':
              return <RequestRefuse request={request} />;
            case 'En attente':
              return <RequestWait request={request} submitAccepteRequest={submitAccepteRequest} getRequestId={getRequestId} />;
            case 'Terminée':
              return <RequestFinish request={request} />;
            case 'Annulée':
              return <RequestCancel request={request} submitDeleteRequest={submitDeleteRequest} getRequestId={getRequestId} />;

            default:
              return null;
          }
        })}
      </div>
    );
  }
  if (requestSelected !== null) {
    return (
      <div className="requestList_container">
        {requestSelected.map((request) => {
          switch (request.status) {
            case 'Acceptée':
              return <RequestAccepte request={request} getRequestId={getRequestId} />;
            case 'Refusée':
              return <RequestRefuse request={request} />;
            case 'En attente':
              return <RequestWait request={request} submitAccepteRequest={submitAccepteRequest} getRequestId={getRequestId} />;
            case 'Terminée':
              return <RequestFinish request={request} />;
            case 'Annulée':
              return <RequestCancel request={request} submitDeleteRequest={submitDeleteRequest} getRequestId={getRequestId} />;

            default:
              return null;
          }
        })}
      </div>
    );
  }
};

Request.propTypes = {
  requestSelectedName: PropTypes.string.isRequired,
  requestSelected: PropTypes.array,
  requestSortSelected: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  getRequest: PropTypes.func.isRequired,
  requestList: PropTypes.array.isRequired,
  submitAccepteRequest: PropTypes.func.isRequired,
  submitDeleteRequest: PropTypes.func.isRequired,
  getRequestId: PropTypes.func.isRequired,
};

// == Export
export default Request;
