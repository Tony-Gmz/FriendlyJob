import React from 'react';
import profil from 'src/assets/img/screenshot.png';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import { whitoutAvatar } from 'src/utils';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import './joberService.scss';
import { Link } from 'react-router-dom';

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
              <NavButtonStyled>Contact</NavButtonStyled>
            </Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default JoberService;
