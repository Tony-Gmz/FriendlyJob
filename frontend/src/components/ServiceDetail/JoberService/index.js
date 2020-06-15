// == Import Library
import React, { useEffect } from 'react';
import { Rating } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

// == Import style
import './joberService.scss';

const JoberService = ({ jobWorker, getServiceName, jobWorkerStar }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
  }, []);

  const  id  = jobWorker.user.id;
  let userRating = jobWorker.user.jobWorkerDemands[0];

  console.log(jobWorker.user.image);

  if (userRating === undefined) {
    userRating = {
      rating: null,
    };
  }
  if (userRating.rating !== null) {
    return (
      <>
  <Link to={`/services/${slug}/jobworkers/jobworker_${id}`}>
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
      <Link to={`/services/${slug}/jobworkers/jobworker_${id}`}>
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
};

export default JoberService;
