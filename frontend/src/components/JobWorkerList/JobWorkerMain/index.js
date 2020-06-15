import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

import './jobWorkerMain.scss';

const JobWorkerMain = ({ jobWorkers, getServiceName }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
  }, []);

  return (
    <div className="jobWorker_list">
      {jobWorkers.map((jobWorker) => {
        const id = jobWorker.user.id;
        let userRating = jobWorker.user.jobWorkerDemands[0];

        if (userRating === undefined) {
          userRating = {
            rating: null,
          };
        }
        if (userRating.rating !== null) {
          return (
            <>
              <Link to={`/services/${slug}/jobworkers/jobworker_${id}`} className="jobWorker_list_item">
                <div id="login-container">
                  <div className="profile-img" style={{ background: `url(${jobWorker.user.image})` }} />
                  <h1>
                    {jobWorker.user.firstname}
                  </h1>
                  <div className="description">
                    {jobWorker.description}
                  </div>
                  <div className="social">
                    {jobWorker.price}€/Heure
                  </div>
                  <button type="button">Contacter</button>
                  <footer>
                    <div className="likes">
                      <Rating defaultRating={userRating.rating.star} maxRating={5} disabled />
                    </div>
                    <div className="cards_department">
                      <p className="cards_department_content">{jobWorker.user.department.name}</p>
                      <p className="cards_department_content">({jobWorker.user.department.number})</p>
                    </div>
                  </footer>
                </div>
              </Link>
            </>
          );
        }
        return (
          <>
            <Link to={`/services/${slug}/jobworkers/jobworker_${id}`} className="jobWorker_list_item">
              <div id="login-container">
                <div className="profile-img" style={{ background: `url(${jobWorker.user.image})`}} />
                <h1>
                  {jobWorker.user.firstname}
                </h1>
                <div className="description">
                  {jobWorker.description}
                </div>
                <div className="social">
                  {jobWorker.price}€/Heure
                </div>
                <button type="button">Contacter</button>
                <footer>
                  <div className="likes">
                    <Rating defaultRating={0} maxRating={5} disabled />
                  </div>
                  <div className="cards_department">
                    <p className="cards_department_content">{jobWorker.user.department.name}</p>
                    <p className="cards_department_content">({jobWorker.user.department.number})</p>
                  </div>
                </footer>
              </div>
            </Link>
          </>
        );
      })}
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
