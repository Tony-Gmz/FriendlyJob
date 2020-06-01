import React from 'react';
import PropTypes from 'prop-types';
import './details.scss';
import ModalReservation from 'src/components/ModalReservation';
import Avatar from '@material-ui/core/Avatar';
import { Card } from 'semantic-ui-react';
import { whitoutAvatar } from 'src/utils';


const Details = ({
  isLogged,
  firstname,
  image,
  about,
  department,
  skills,
  id }) => {
  /*  console.log(`prenom: ${department.name} + a propos :${about}`); */
  const userAvatar = image
  const screenWidth = window.screen.width;
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
        {isLogged && <ModalReservation />}
        {!isLogged && <div>Vous souhaitez reserver un service à nom du jobworker ? Connectez-vous ou inscrivez-vous </div>}
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
