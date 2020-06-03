import React from 'react';
import { Button, Card } from 'semantic-ui-react';

import ModalComment from 'src/containers/ModalComment';


// == Composant
const RequestFinishFU = ({ request }) => {


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
      <div className="finish_texte">
        Merci d'avoir fait confiance a notre JobWorker, si vous le desirez vous pouvez laisser un commentaire sur sa prestation.
      </div>
      <ModalComment request={request} />
    </Card.Content>
  </Card>
  );
};


export default RequestFinishFU;
