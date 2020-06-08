import React, { useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import ModalCancelRequest from 'src/containers/ModalCancelRequest';
import ModalEditRequest from 'src/containers/ModalEditRequest';


// == Composant
const RequestWaitFU = ({ getRequest, request }) => {

  return (
    <Card className="request_Card">
      <Card.Content className="request_Content">
        <div className="request_LeftSide">
          <Card.Header>{request.jobWorker.firstname}</Card.Header>
          <Card.Meta>{request.service.title}</Card.Meta>
        </div>
        <div className="request_MiddleSide">
          <div className="date">{request.reservationDate}</div>
          <div className="hour">{request.reservationHour}</div>
        </div>
        <div className="request_RightSide">
          <Card.Description>
            {request.body}
          </Card.Description>
        </div>
      </Card.Content>
      <div className="request_Status">{request.status}</div>
      <Card.Content extra>
        <div className="buttons">
          <Button className="approve_Button">
            <ModalEditRequest request={request} getRequest={getRequest} />
          </Button>
          <Button className="decline_Button">
            <ModalCancelRequest request={request} getRequest={getRequest} />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

   // fermeture de la const request
// == Export
export default RequestWaitFU;
