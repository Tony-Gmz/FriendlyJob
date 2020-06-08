// == Import Library
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating, Button, Image, CardContent } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
          <Card.Content>
            "{jobWorker.user.jobWorkerDemands[0].rating.comment}"
          </Card.Content>
          <Card.Content extra>
            <Rating defaultRating={jobWorker.user.jobWorkerDemands[0].rating.star} maxRating={5} disabled />
            <Link to={`/jobworker/${id}`}>
              <Button style={{ backgroundColor: '#FF385C', color: '#FFFF', marginLeft: '1em' }}>Contact</Button>
            </Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default JoberService;
