import React from 'react';
import { Card } from 'semantic-ui-react';


// == Composant
const RequestCancel = ({ request, getCommentId, submitDeleteRequest }) => {
  
  const handleClick = () => {
    getCommentId(request.id);
    submitDeleteRequest();
  };
  return (
    <Card className="request_Card_refuse">
      <Card.Content className="request_Content">
        <div className="request_LeftSide">
          <Card.Header>{request.friendlyUser.firstname}</Card.Header>
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
          Cette demande a été annulé par le FriendlyUser nous sommes desolés pour vous mais continuer a etre actif vous devriez recevoir d'autres demandes.
        </div>
        <button type="button" className="button_delete_request" onClick={handleClick}>
          supprimer
        </button>
      </Card.Content>
    </Card>
  );
};

export default RequestCancel;
