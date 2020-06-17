import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { Link, useParams } from 'react-router-dom';

import './jobWorkerMain.scss';

const JobWorkerMain = ({ currentPage, getJobWorker, jobWorkers, getServiceName }) => {
  const { slug } = useParams();

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
              <Link to={`/services/${slug}/jobworkers/jobworker_${id}/`} className="jobWorker_list_item">
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
                      <Rating name="read-only" value={userRating.rating.star} readOnly />
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
            <Link to={`/services/${slug}/jobworkers/jobworker_${id}/`} className="jobWorker_list_item">
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
                    <Rating name="read-only" value={0} readOnly />
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
