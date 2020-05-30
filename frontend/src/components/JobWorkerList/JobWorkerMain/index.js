import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import Avatar from '@material-ui/core/Avatar';
import { Card, Rating } from 'semantic-ui-react';
import { whitoutAvatar } from 'src/utils';
import './jobWorkerMain.scss';


const JobWorkerMain = ({ jobWorkers }) => {
  return (
    <div className="jobWorker_main">
      <div className="jobWworker_sort">
        <Dropdown text="Trier">
          <Dropdown.Menu>
            <Dropdown.Item text="Trier par Prix" />
            <Dropdown.Item text="Trier par note" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="jobWorker_wrap">
        {jobWorkers.map((jobWorker) => {
          const slug = jobWorker.id;
          const userAvatar = jobWorker.user.image;
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
                        <Rating defaultRating={jobWorker.user.jobWorkerDemands[0].rating.star} maxRating={5} disabled />
                        <Link to={`/jobworker/${slug}`}>
                          <NavButtonStyled>Contact</NavButtonStyled>
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
