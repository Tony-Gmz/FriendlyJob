import React from 'react';
import { Button, Card } from 'semantic-ui-react';


// == Composant
const RequestCancelFU = ({ request }) => {

  return (
    <Card className="request_Card_refuse">
      <Card.Content className="request_Content">
        <div className="request_LeftSide">
          <Card.Header>{request.jobWorker.firstname}</Card.Header>
          <Card.Meta>{request.service.title}</Card.Meta>
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
          Vous avez annulé cette demande
        </div>
      </Card.Content>
    </Card>
  );
};

export default RequestCancelFU;
