// == Import Library
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

// == Import style
import './joberService.scss';

const JoberService = ({
  jobWorker,
  getServiceName,
  id,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
  }, []);

  // const userId = jobWorker.user.id;
  let userRating = jobWorker.user.jobWorkerDemands[0];

  if (userRating === undefined) {
    userRating = {
      rating: null,
    };
  }
  if (userRating.rating !== null) {
    return (
      <>
        <Link to={`/services/${slug}/jobworkers/jobworker_${id}/`}>
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
      <Link to={`/services/${slug}/jobworkers/jobworker_${id}/`}>
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
};

JoberService.propTypes = {
  id: PropTypes.number.isRequired,
  jobWorker: PropTypes.objectOf(
    PropTypes.shape({
      department: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      jobWorkerDemands: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
  getServiceName: PropTypes.func.isRequired,
};

export default JoberService;
