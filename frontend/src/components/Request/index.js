// == Import npm
import React from 'react';
import { Button, Card } from 'semantic-ui-react';

// == Import
import './request.scss';

// == Composant
const Request = () => (
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
              J'aimerais installer Word sur mon PC,  J'aimerais installer Word sur mon PC
              J'aimerais installer Word sur mon PC J'aimerais installer Word sur mon PC. Merci
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
              J'aimerais installer Word sur mon PC. Merci
            </Card.Description>
          </div>
        </Card.Content>
        <div className="request_Status">En attente</div>
        <Card.Content extra>
          <div className="buttons">
            <Button className="approve_Button">
              Approve
            </Button>
            <Button className="decline_Button">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

// == Export
export default Request;
