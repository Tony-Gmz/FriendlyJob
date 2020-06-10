import React from 'react';
import { Card } from 'semantic-ui-react';
import { changeHourFormat, changeDateFormat } from 'src/utils';

// == Composant
const RequestRefuseFU = ({ request, getCommentId, submitDeleteRequest }) => {

  const hourResevation = new Date(request.reservationHour);
  const dateReservation = new Date(request.reservationDate);

  const handleClick = () => {
    console.log(request.id);
    console.log('click sur supprimer');
    getCommentId(request.id);
    submitDeleteRequest();
  };

  return (
    <Card className="request_Card">
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
        <div className="refuse_texte">
          Nous Sommes désolé mais le WorkJober a refusé votre demande.
        </div>
        <button type="button" className="button_delete_request" onClick={handleClick}>
          supprimer
        </button>
      </Card.Content>
    </Card>
  );
};

export default RequestRefuseFU;
