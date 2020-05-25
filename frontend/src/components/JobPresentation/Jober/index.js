import React from 'react';
import profil from 'src/assets/img/screenshot.png';
import Avatar from '@material-ui/core/Avatar';
import { Card } from 'semantic-ui-react';
import JoberRating from './rating';
import JoberStyled from './JoberStyled';
import './jober.scss';

// Styled component reusable

const Jober = () => {

  const description = [
    "Passionné d'informatique, je sais faire de nombreuses chose sous windows",
  ].join(' ');

  return (
    <JoberStyled>
      <div className="Jober_avatar">
        <Avatar alt="Remy Sharp" src={profil} />
      </div>
      <div className="Jober_card">
        <Card>
          <Card.Content header="Thibault" />
          <Card.Content description={description} />
          <Card.Content extra>
          10€/heure  <JoberRating />
          </Card.Content>
        </Card>
      </div>
    </JoberStyled>
  );
};

export default Jober;
