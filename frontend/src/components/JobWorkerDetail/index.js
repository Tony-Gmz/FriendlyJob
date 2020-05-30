import React from 'react';
import Details from 'src/components/JobWorkerDetail/Details';
import Evaluation from './Evaluation';
import Competence from './Competences';
import PropTypes from 'prop-types';

const JobWorkerDetails = ({ randomJobWorker }) => {
// console.log(randomJobWorker);
  return(
      <div className="jobWorkerDetail">

        <Details {...randomJobWorker} />
        <Competence skills={randomJobWorker.skills} />
        <Evaluation demands={randomJobWorker.jobWorkerDemands} />
      </div>
  );
};



JobWorkerDetails.propTypes = {
  randomJobWorker: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default JobWorkerDetails;
