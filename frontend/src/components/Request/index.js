// == Import npm
import React, { useEffect } from 'react';
import { Button, Card } from 'semantic-ui-react';

// == Import
import './request.scss';
import ModalExampleCloseConfig from '../ModalComment';


// == Composant
const Request = ({ getRequest }) => {
  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="request">
      <Card.Group className="request_Cards">
        <Card className="request_Card">
          <Card.Content className="request_Content">
            <div className="request_LeftSide">
              <Card.Header>Maazaoui Karim</Card.Header>
              <Card.Meta>Informatique</Card.Meta>
            </div>
            <div className="request_MiddleSide">
              <div className="date">Le 22-07-2020</div>
              <div className="hour">18h00</div>
            </div>
            <div className="request_RightSide">
              <Card.Description>
                "ceci est une requete recu par un JobWorker"
              </Card.Description>
            </div>
          </Card.Content>
          <div className="request_Status">En attente</div>
          <Card.Content extra>
            <Button className="approve_Button">
              Approve
            </Button>
            <Button className="decline_Button">
              Decline
            </Button>
          </Card.Content>
        </Card>
        <Card className="request_Card">
          <Card.Content className="request_Content">
            <div className="request_LeftSide">
              <Card.Header>Maazaoui Karim</Card.Header>
              <Card.Meta>Informatique</Card.Meta>
            </div>
            <div className="Mrequest_MiddleSide">
              <div className="date">Le 22-07-2020</div>
              <div className="hour">18h00</div>
            </div>
            <div className="request_RightSide">
              <Card.Description>
                "ceci est une requete envoyer par un FriendlyJober"
              </Card.Description>
            </div>
          </Card.Content>
          <div className="request_Status">En attente</div>
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
        </Card>
        <Card className="request_Card">
          <Card.Content className="request_Content">
            <div className="request_LeftSide">
              <Card.Header>Maazaoui Karim</Card.Header>
              <Card.Meta>Informatique</Card.Meta>
            </div>
            <div className="Mrequest_MiddleSide">
              <div className="date">Le 22-07-2020</div>
              <div className="hour">18h00</div>
            </div>
            <div className="request_RightSide">
              <Card.Description>
                "ceci est une requete terminé coté FriendlyJober"
              </Card.Description>
            </div>
          </Card.Content>
          <div className="request_Status">Terminer</div>
          <Card.Content extra>
            <div className="buttons">
              <ModalExampleCloseConfig />
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

// == Export
export default Request;
