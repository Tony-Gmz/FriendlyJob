import React from 'react';
import profil from 'src/assets/img/screenshot.png';
import Avatar from '@material-ui/core/Avatar';
import { Card } from 'semantic-ui-react';
import JoberRating from './rating';
import JoberStyled from './JoberStyled';
import './jober.scss';
import NavButtonStyled from '../../../Button/NavButtonStyled';

// Styled component reusable

const Jober = () => {

  const description = [
    "Passionné d'informatique, je sais faire de nombreuses chose sous windows",
  ].join(' ');

  let screenWidth = window.screen.width;
  console.log(screenWidth);

  return (
    <JoberStyled>
      <div className="Jober_avatar">
        {screenWidth > 768 ? <Avatar alt="Remy Sharp" src={profil} /> : ''}
      </div>
      <div className="Jober_card">
        <Card>
          <Card.Content header="Thibault" />
          <Card.Content description={description} />
          <Card.Content extra>
          10€/heure  <JoberRating />
            <NavButtonStyled>Contact</NavButtonStyled>
          </Card.Content>
        </Card>
      </div>
    </JoberStyled>
  );
};

export default Jober;
