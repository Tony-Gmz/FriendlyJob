import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Card, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';
import Avatar from '@material-ui/core/Avatar';
import { whitoutAvatar } from 'src/utils';
import './jobWorkerMain.scss';


const JobWorkerMain = ({ jobWorkers, sortByPrice, sortByAlphabet }) => {

  const sortByInput = (e) => {
    const { value } = e.target.value;
    const direction = value.endsWith('asc') ? 'asc' : 'desc';

    if (value.startsWith('price')) {
      sortByPrice({ direction });
    }
    else {
      sortByAlphabet({ direction });
    }
  };


  return (
    <div className="jobWorker_main">
      <div className="jobWworker_sort">
        <Dropdown text="Trier">
          <Dropdown.Menu onChange={sortByInput}>
            <Dropdown.Item value="alphabet_asc" text="Trier par Prix Croissant" />
            <Dropdown.Item value="alphabet_desc" text="Trier par Prix Decroissant" />
            <Dropdown.Item value="price_asc" text="Trier par Note Croissante" />
            <Dropdown.Item value="price_desc" text="Trier par Note Decroissante" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="jobWorker_wrap">
        {jobWorkers.map((jobWorker) => {
          const slug = jobWorker.user.id;
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
