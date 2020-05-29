import React from 'react';
import PropTypes from 'prop-types';
import profil from 'src/assets/img/screenshot.png';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import './jober.scss';
import { Link } from 'react-router-dom';
import NavButtonStyled from '../../../Button/NavButtonStyled';

// Styled component reusable

const Jober = ({ randomJobWorker }) => (

  <div className="jober">
    <div className="Jober_avatar">
      <Avatar alt="Remy Sharp" src={randomJobWorker.image} />
    </div>
    <div className="Jober_card">
      <Card key={randomJobWorker.id}>
        <Card.Content header={randomJobWorker.firstname} />
        <Card.Content description={randomJobWorker.about} />
        <Card.Content extra>
          <Rating defaultRating={randomJobWorker.jobWorkerDemands[0].rating.star} maxRating={5} disabled />
          <Link to={`/jobworker/${randomJobWorker.firstname}`}>
            <NavButtonStyled>Contact</NavButtonStyled>
          </Link>
        </Card.Content>
      </Card>
    </div>
  </div>
);

Jober.propTypes = {
  randomJobWorker: PropTypes.object.isRequired,
};
export default Jober;
