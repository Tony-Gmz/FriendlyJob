// == Import npm
import React from 'react';
import { Button, Card } from 'semantic-ui-react';

// == Import
import ModalExampleCloseConfig from '../../ModalComment';


// == Composant
const RequestFriendlyUser = ({ requestList }) => {
  console.log(requestList);
  return (
    <Card.Group className="request_Cards">
      {requestList.map((request) => {
        const wait = 'En attente';
        const refuse = 'Refusé';
        const agree = 'Accepté';
        const finish = 'terminé';
        return (
          <Card className="request_Card">
            <Card.Content className="request_Content">
              <div className="request_LeftSide">
                <Card.Header>{request.friendlyUser.title}</Card.Header>
                <Card.Meta>{request.service.title}</Card.Meta>
              </div>
              <div className="Mrequest_MiddleSide">
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
            {wait === request.status ?? (
              <Card.Content extra>
                <div className="buttons">
                  <Button className="approve_Button">
                    Modifier
                  </Button>
                  <Button className="decline_Button">
                    Supprimer
                  </Button>
                </div>
              </Card.Content>
            )}
            {refuse === request.status ?? (
              <Card.Content extra>
                <div className="refuse_message">
                  Nous sommes desolé mais le JobWorker à refusé votre demande de services
                </div>
              </Card.Content>
            )}
            {agree === request.status ?? (
              <Card.Content extra>
                <div className="buttons">
                  <Button className="approve_Button" disabled>
                    Modifier
                  </Button>
                  <Button className="decline_Button">
                    Annuler
                  </Button>
                </div>
              </Card.Content>
            )}
            {finish === request.status ?? (
              <Card.Content extra>
                <div className="buttons">
                  <ModalExampleCloseConfig />
                </div>
              </Card.Content>
            )}
          </Card>
        );
      })}
    </Card.Group>
  );
};

// == Export
export default RequestFriendlyUser;
