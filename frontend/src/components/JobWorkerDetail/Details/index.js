import React from 'react';
import PropTypes from 'prop-types';
import './details.scss';
import ModalReservation from 'src/containers/ModalReservation';
import Avatar from '@material-ui/core/Avatar';
import { Card } from 'semantic-ui-react';
import { whitoutAvatar } from 'src/utils';
import { Message } from 'semantic-ui-react'


const Details = ({
  isLogged,
  firstname,
  image,
  about,
  department,
  skills,
  id }) => {
  /*  console.log(`prenom: ${department.name} + a propos :${about}`); */
  const userAvatar = image;
  const screenWidth = window.screen.width;
  const role = localStorage.getItem('userRole');
  return (

    <div className="detail">
      <div className="detail_title">
        <h2>Détail de {firstname}</h2>
      </div>
      <div className="detail_content">
        <div className="detail_content_card">
          <div className="Jober_avatar">
            {userAvatar && <Avatar alt="Remy Sharp" src={image} /> }
            {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(firstname)}</Avatar>}
          </div>
          <div className="Jober_card">
            <Card key={id}>
              <Card.Content header={firstname} />
              <Card.Content description={skills[0].description} />
              <Card.Content extra>
                Departement : {department.name}
              </Card.Content>
            </Card>
          </div>
        </div>
        <div className="detail_content_about">
          <div className="detail_content_about-title">
            <h3>A propos</h3>
          </div>
          <p>{about}</p>
        </div>
      </div>
      <div className="detail_reservation">
        {isLogged === 'true' && role === 'FRIENDLY_USER' ? <ModalReservation /> : ''}
        {!isLogged && (
          <div className="detail_reservation_message">
         <Message warning>
            <div>
              <i className="info circle icon"></i>
            </div>
            <div className="reservation_message content">
            <Message.Header> Vous souhaitez prendre rendez-vous avec {firstname} ? Vous devez être inscrit ou connecté</Message.Header>
            <p>Visitez notre page <a className="message_reservation_link" href="#inscription">d'inscription</a>  ou de <a className="message_reservation_link" href="#connexion"> connexion</a> et réessayez ! </p>
            </div>
          </Message>
          </div>
        )}
      </div>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  department: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Details;
