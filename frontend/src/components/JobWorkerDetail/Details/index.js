import React from 'react';
import PropTypes from 'prop-types';
import './details.scss';
import ModalReservation from 'src/containers/ModalReservation';
import Avatar from '@material-ui/core/Avatar';
import { Card, Message } from 'semantic-ui-react';
import ModalConnexion from 'src/containers/ModalConnexion';
import ModalInscription from 'src/containers/ModalInscription';

const Details = ({
  isLogged,
  firstname,
  image,
  about,
  department,
  skills,
  id,
}) => {
  /*  console.log(`prenom: ${department.name} + a propos :${about}`); */
  const userAvatar = image;
  const screenWidth = window.screen.width;
  const role = localStorage.getItem('userRole');
  console.log(department);
  console.log(role);
  return (

    <div className="detail">
      <div className="detail_title">
        <h2>Détail de {firstname}</h2>
      </div>
      <div className="detail_content">
        <div className="detail_content_about">
          <div className="Jober_avatar">
            {userAvatar && <Avatar alt="Remy Sharp" src={image} /> }
            {!userAvatar && <Avatar alt="Remy Sharp" src=""></Avatar>}
          </div>
          <div className="detail_content_about-title">
            <h3>A propos</h3>
            <p>{about}</p>
            <p>{department.name} | ({department.number})</p>
          </div>
        </div>
      </div>
      <div className="detail_reservation">
        {isLogged === true && role === 'FRIENDLY_USER' ? <ModalReservation /> : ''}
        {!isLogged && (
          <div className="detail_reservation_message">
         <Message warning>
            <div>
              <i className="info circle icon icon_message_detail"></i>
            </div>
           <div className="reservation_message content">
            <Message.Header> Vous souhaitez prendre rendez-vous avec {firstname} ? Vous devez être inscrit ou connecté</Message.Header>
            <p>Visitez notre page <ModalInscription /> ou <ModalConnexion /> et réessayez ! </p>
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
