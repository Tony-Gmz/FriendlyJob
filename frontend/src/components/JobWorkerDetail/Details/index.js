import React from 'react';

import './details.scss';
import NavButtonStyled from '../../Button/NavButtonStyled';
import ModalReservation from '../../ModalReservation';
import JoberService from '../../ServiceDetail/JoberService';
import profil from 'src/assets/img/screenshot.png';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Details = ({firstname, about, department }) => {
  console.log(`prenom: ${department.name} + a propos :${about}`);
  const screenWidth = window.screen.width;
return (

  <div className="detail">
    <div className="detail_title">
      <h2>Détail de {firstname}</h2>
    </div>
    <div className="detail_content">
      <div className="detail_content_card">
        <div className="Jober_avatar">
          {screenWidth > 768 ? <Avatar alt="Remy Sharp" src="" /> : ''}
        </div>
        <div className="Jober_card">
          <Card>
            <Card.Content header={firstname} />
            <Card.Content description={about} />
            <Card.Content extra>
            Departement :{department.name}
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
      <ModalReservation />
    </div>
  </div>

);
};



export default Details;
