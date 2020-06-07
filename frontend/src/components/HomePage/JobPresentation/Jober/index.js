// == Import Library
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import Style
import './jober.scss';

// == Import Utils
import { whitoutAvatar } from 'src/utils';

// Styled component reusable

const Jober = ({ randomJobWorker }) => {
  const userAvatar = randomJobWorker.image;
  const slug = randomJobWorker.id;
  return (
    <div className="jober">
      <div className="Jober_card">
        <div className="Jober_avatar">
          {userAvatar && <Avatar alt="Remy Sharp" src={randomJobWorker.image} /> }
          {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(randomJobWorker.firstname)}</Avatar>}
        </div>
        <Card key={randomJobWorker.id}>
          <Card.Content header={randomJobWorker.firstname} />
          <Card.Content description={randomJobWorker.about} />
          <Card.Content extra>
            <Rating
              defaultRating={randomJobWorker.jobWorkerDemands[0].rating.star}
              maxRating={5}
              disabled
            />
            <Link to={`/jobworker/${slug}`} />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

Jober.propTypes = {
  randomJobWorker: PropTypes.object.isRequired,
};
export default Jober;
