// == Import npm
import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

// == Import
import './request.scss';

// == Composant
const Request = () => (
  <div className="request">
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>Maazaoui Karim</Card.Header>
          <Card.Meta>Informatique</Card.Meta>
          <Card.Description>
            J'aimerais installer Word sur mon PC. Merci
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />
          <Card.Header>Skn Jolan</Card.Header>
          <Card.Meta>Bricolage</Card.Meta>
          <Card.Description>
            J'ai toute ma salle de bain a refaire...
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
          />
          <Card.Header>Thibault Zer</Card.Header>
          <Card.Meta>Aide a la personne (menage)</Card.Meta>
          <Card.Description>
            Salut je cherche une femme pour faire le menage pour moi ! Merci
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
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
