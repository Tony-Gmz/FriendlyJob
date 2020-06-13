// == Import Library
import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating, Button } from 'semantic-ui-react';
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
  const  id  = jobWorker.user.id;

  let userRating = jobWorker.user.jobWorkerDemands[0];
  const screenWidth = window.screen.width;

  if (userRating === undefined) {
    userRating = {
      rating: null,
    };
  }
  if (userRating.rating !== null) {
    return (
      <>
        <Link to={`/services/${slug}/jobworkers/jobworker_${id}`}>
          <div className="jobWorker_box">
            <div className="jober">
              <div className="Jober_avatar">
                {userAvatar && <Avatar alt="Remy Sharp" src={jobWorker.user.image} /> }
                {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(jobWorker.user.firstname)}</Avatar>}
              </div>
              <div className="Jober_card">
                <Card>
                  <Card.Content header={jobWorker.user.firstname} />
                  <Card.Content description={jobWorker.description} />
                  <Card.Content extra>
                    {jobWorker.price}€/Heure
                  </Card.Content>
                  <Card.Content extra>
                    <Rating defaultRating={userRating.rating.star} maxRating={5} disabled />
                    <Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Contact</Button>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link to={`/services/${slug}/jobworkers/jobworker_${id}`}>
        <div className="jobWorker_box">
          <div className="jober">
            <div className="Jober_avatar">
              {userAvatar && <Avatar alt="Remy Sharp" src={jobWorker.user.image} /> }
              {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(jobWorker.user.firstname)}</Avatar>}
            </div>
            <div className="Jober_card">
              <Card>
                <Card.Content header={jobWorker.user.firstname} />
                <Card.Content description={jobWorker.description} />
                <Card.Content extra>
                  {jobWorker.price}€/Heure
                </Card.Content>
                <Card.Content extra>
                  <Rating defaultRating={0} maxRating={5} disabled />
                  <Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Contact</Button>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default JoberService;
