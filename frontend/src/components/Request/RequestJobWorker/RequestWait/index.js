import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import ModalRefuseRequest from 'src/containers/ModalRefuseRequest';


// == Composant
const RequestWait = ({ request, submitAccepteRequest, getCommentId  }) => {
  const handleClick = () => {
    console.log('click sur accepte detecté');
    getCommentId(request.id);
    submitAccepteRequest();
  };
  return (
    <Card className="request_Card">
      <Card.Content className="request_Content">
        <div className="request_LeftSide">
          <Card.Header>{request.friendlyUser.firstname}</Card.Header>
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
          <Button onClick={handleClick} className="approve_Button">
            Accepter
          </Button>
          <Button className="decline_Button">
            <ModalRefuseRequest request={request} />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};




// == Export
export default RequestWait;