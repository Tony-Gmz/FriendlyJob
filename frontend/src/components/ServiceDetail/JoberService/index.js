// == Import Library
import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating, Button, Image, CardContent } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

// == Import style
import './joberService.scss';

// == Import Utils
import { whitoutAvatar } from 'src/utils';


const JoberService = ({ jobWorker, getServiceName, jobWorkerStar }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
  }, []);

  const userAvatar = jobWorker.user.image;
  const id = jobWorker.user.id;
  let userRating = jobWorker.user.jobWorkerDemands;
  console.log(jobWorker);

  let screenWidth = window.screen.width;
  //console.log(screenWidth);
  console.log(jobWorkerStar);
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
            {jobWorker.description}
          </Card.Content>
          <Card.Content extra>
              {userRating === null || userRating === 'undefined' ? (
                        <Rating defaultRating={0} maxRating={5} disabled />
                      ): [
                        (userRating.rating === null || userRating.rating === 'undefined'
                        ? <Rating defaultRating={0} maxRating={5} disabled />
                        : <Rating defaultRating={userRating[0].rating.star} maxRating={5} disabled /> ),
                      ]}
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
