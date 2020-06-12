import React, { useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';
import ModalCancelRequest from 'src/containers/ModalCancelRequest';
import ModalEditRequest from 'src/containers/ModalEditRequest';
import { changeHourFormat, changeDateFormat } from 'src/utils';


// == Composant
const RequestWaitFU = ({ getRequest, request }) => {
  const hourResevation = new Date(request.reservationHour);
  const dateReservation = new Date(request.reservationDate);

  return (
    <Card className="request_Card_wait">
      <Card.Content className="request_Content">
        <div className="request_LeftSide">
          <Card.Header>{request.jobWorker.firstname}</Card.Header>
          <Card.Meta>{request.service.title}</Card.Meta>
        </div>
        <div className="request_MiddleSide">
          <div className="date">{changeDateFormat(dateReservation)}</div>
          <div className="hour">{changeHourFormat(hourResevation)}</div>
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
          <ModalEditRequest request={request} getRequest={getRequest} />
          <ModalCancelRequest request={request} getRequest={getRequest} />
        </div>
      </Card.Content>
    </Card>
  );
};

   // fermeture de la const request
// == Export
export default RequestWaitFU;
