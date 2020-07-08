// == Import Library
import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

// == Import Style
import './jober.scss';

// Component jobworker card in homepage

// eslint-disable-next-line arrow-body-style
const Jober = ({ randomJobWorker }) => {
   //console.log(randomJobWorker);
  return (
    <>
      <div key={randomJobWorker.id} id="login-container">
        <div className="profile-img" style={{ background: `url(${randomJobWorker.image})` }} />
        <h1>
          {randomJobWorker.firstname}
        </h1>
        <div className="description">
          {randomJobWorker.skills[0].description}
        </div>
        <div className="social">
          {randomJobWorker.skills[0].price}€/Heure
        </div>
        <button type="button" disabled>Contacter</button>
        <footer>
          <div className="likes">
            <Rating
              defaultRating={randomJobWorker.jobWorkerDemands[0].rating.star}
              maxRating={5}
              disabled
            />
          </div>
          <div className="cards_department">
            <p className="cards_department_content">{randomJobWorker.department.name}</p>
            <p className="cards_department_content">({randomJobWorker.department.number})</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Jober.propTypes = {
  randomJobWorker: PropTypes.object.isRequired,
};
export default Jober;
