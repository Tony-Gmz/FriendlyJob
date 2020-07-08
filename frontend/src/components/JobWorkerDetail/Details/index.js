import React from 'react';
import PropTypes from 'prop-types';
import './details.scss';
import ModalReservation from 'src/containers/ModalReservation';
import Avatar from '@material-ui/core/Avatar';
import { Message } from 'semantic-ui-react';
import ModalConnexion from 'src/containers/ModalConnexion';
import ModalInscription from 'src/containers/ModalInscription';

const Details = ({
  isLogged,
  currentJobWorkerDetail,
}) => {
  console.log(currentJobWorkerDetail);
  const userAvatar = currentJobWorkerDetail.image;
  // we use UseRole for a condition display
  const role = localStorage.getItem('userRole');
  return (

    <div className="detail">
      <div className="detail_title">
        <h2>Détail de {currentJobWorkerDetail.firstname}</h2>
      </div>
      <div className="detail_content">
        <div className="detail_content_about">
          <div className="Jober_avatar">
            {userAvatar && <Avatar alt="Remy Sharp" src={currentJobWorkerDetail.image} /> }
            {!userAvatar && <Avatar alt="Remy Sharp" src="" />}
          </div>
          <div className="detail_content_about-title">
            <h3>A propos</h3>
            <p>{currentJobWorkerDetail.about}</p>
            <p>{currentJobWorkerDetail.department.name} | ({currentJobWorkerDetail.department.number})</p>
          </div>
        </div>
      </div>
      <div className="detail_reservation">
        {isLogged === true && role === 'FRIENDLY_USER' ? <ModalReservation /> : ''}
        {!isLogged && (
          <div className="detail_reservation_message">
            <Message warning>
              <div>
                <i className="info circle icon icon_message_detail" />
              </div>
              <div className="reservation_message content">
                <Message.Header> Vous souhaitez prendre rendez-vous avec {currentJobWorkerDetail.firstname}
                  ? Vous devez être inscrit ou connecté
                </Message.Header>
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
  isLogged: PropTypes.bool.isRequired,
  currentJobWorkerDetail: PropTypes.object.isRequired,
};

export default Details;
