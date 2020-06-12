import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Rating, Button } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';


import { whitoutAvatar } from 'src/utils';
import './jobWorkerMain.scss';


const JobWorkerMain = ({ jobWorkers, getServiceName }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
  }, []);

  return (
    <div className="jobWorker_main">
      <div className="jobWorker_wrap">
        {jobWorkers.map((jobWorker) => {
          const id = jobWorker.user.id;
          const userAvatar = jobWorker.user.image;
          let userRating = jobWorker.user.jobWorkerDemands;
          console.log(userRating[0].rating.star)
          let userRatingStar = userRating.rating;
          // console.log(userRating);
          return (
            <Link>
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
                      {userRating === null || userRating === 'undefined' ? (
                        <Rating defaultRating={0} maxRating={5} disabled />
                      ): [
                        (userRating.rating === null || userRating.rating === 'undefined'
                        ? <Rating defaultRating={0} maxRating={5} disabled />
                        : <Rating defaultRating={userRating[0].rating.star} maxRating={5} disabled /> ),
                      ]}
                        <Link to={`/services/${slug}/jobworkers/jobworker_${id}`}>
                          <Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Contact</Button>
                        </Link>
                      </Card.Content>
                    </Card>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

JobWorkerMain.propTypes = {

  jobWorkers: PropTypes.arrayOf(
    PropTypes.shape({

    }).isRequired,
  ).isRequired,
};
export default JobWorkerMain;
