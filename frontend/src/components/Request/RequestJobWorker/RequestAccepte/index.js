import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { changeHourFormat, changeDateFormat } from 'src/utils';

// == Composant
const RequestAccepte = ({ request }) => {

  const hourResevation = new Date(request.reservationHour);
  const dateReservation = new Date(request.reservationDate);

  return (
    <Card className="request_Card">
    <Card.Content className="request_Content">
      <div className="request_LeftSide">
        <Card.Header>{request.friendlyUser.firstname}</Card.Header>
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
    <div className="request_Status"><i class="check circle icon"/> {request.status}</div>
    <Card.Content extra>
      <div className="buttons">
        <Button className="approve_Button">
          Contacter le FU
        </Button>
        <Button className="decline_Button" disabled>
          Refuser
        </Button>
      </div>
    </Card.Content>
  </Card>
  )

};
export default RequestAccepte;
