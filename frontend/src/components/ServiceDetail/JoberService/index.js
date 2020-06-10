// == Import Library
import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating, Button, Image, CardContent } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

// == Import style
import './joberService.scss';

// == Import Utils
import { whitoutAvatar } from 'src/utils';


const JoberService = ({ jobWorker, getServiceName }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
  }, []);

  const userAvatar = jobWorker.user.image;
  const userRating = jobWorker.user.jobWorkerDemands[0];
  console.log(userRating);
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
            {userRating && jobWorker.user.jobWorkerDemands[0].rating.comment}
          </Card.Content>
          <Card.Content extra>
            {userRating && <Rating defaultRating={jobWorker.user.jobWorkerDemands[0].rating.star} maxRating={5} disabled />}
            {!userRating && <Rating defaultRating={0} maxRating={5} disabled />}
            <Link to={`/services/${slug}/jobworker_${id}`}>
              <Button style={{ backgroundColor: '#FF385C', color: '#FFFF', marginLeft: '1em' }}>Contact</Button>
            </Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default JoberService;
