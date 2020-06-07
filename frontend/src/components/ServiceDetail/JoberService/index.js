// == Import Library
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// == Import style
import './joberService.scss';

// == Import Utils
import { whitoutAvatar } from 'src/utils';


const JoberService = ({ jobWorker }) => {

  const userAvatar = jobWorker.user.image;
  const id = jobWorker.user.id;
  console.log(jobWorker);

  let screenWidth = window.screen.width;
  //console.log(screenWidth);

  return (
    <div className="joberService">
      <div className="Jober_avatar">
        {userAvatar && <Avatar alt="Remy Sharp" src={jobWorker.user.image} /> }
        {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(jobWorker.user.firstname)}</Avatar>}
      </div>
      <div className="Jober_card">
        <Card>
          <Card.Content header={jobWorker.user.firstname} />
          <Card.Content description={jobWorker.user.about} />
          <Card.Content extra>
            <Rating defaultRating={jobWorker.user.jobWorkerDemands[0].rating.star} maxRating={5} disabled />
            <Link to={`/jobworker/${id}`}>
              <Button>Contact</Button>
            </Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default JoberService;
