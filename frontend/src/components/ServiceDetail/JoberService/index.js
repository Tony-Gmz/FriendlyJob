import React from 'react';
import profil from 'src/assets/img/screenshot.png';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import './joberService.scss';
import { Link } from 'react-router-dom';

const JoberService = () => {

  const description = [
    "Passionné d'informatique, je sais faire de nombreuses chose sous windows",
  ].join(' ');

  let screenWidth = window.screen.width;
  console.log(screenWidth);

  return (
    <div className="joberService">
      <div className="Jober_avatar">
        {screenWidth > 768 ? <Avatar alt="Remy Sharp" src={profil} /> : ''}
      </div>
      <div className="Jober_card">
        <Card>
          <Card.Content header="Thibault" />
          <Card.Content description={description} />
          <Card.Content extra>
            10€/heure <Rating defaultRating={4} maxRating={5} disabled />
            <Link to="/jobworker/thibault">
              <NavButtonStyled>Contact</NavButtonStyled>
            </Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default JoberService;
