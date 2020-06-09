import React, { useEffect } from 'react';
import Details from 'src/components/JobWorkerDetail/Details';
import Evaluation from './Evaluation';
import Competence from './Competences';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Loader from 'src/components/Loader';


const JobWorkerDetails = ({
  isLogged,
  getJobWorkerId,
  getJobWorkerDetail,
  getJobWorkerRating,
  loadingOnJobWorkerDetail,
  currentJobWorkerDetail,
  currentJobWorkerRating,
}) => {
  const jobWorkerId = useParams();
  useEffect(() => {
    getJobWorkerId(jobWorkerId.id);
    getJobWorkerDetail();
    getJobWorkerRating();
  }, []);
 
  return (
    <div className="jobWorkerDetail">
      {loadingOnJobWorkerDetail && <Loader /> }
      {!loadingOnJobWorkerDetail && (
        <>
          <Details isLogged={isLogged} {...currentJobWorkerDetail} />
          <Competence skills={currentJobWorkerDetail.skills} />
          {currentJobWorkerRating && (
            <>
            {currentJobWorkerRating.map((jobWorkerRating) => (
              <Evaluation jobWorkerRating={jobWorkerRating.jobWorkerDemands} />
            ))}
            </>
          )}
          {!currentJobWorkerRating && (
            <div>Test</div>
          )}
        </>
      )}
    </div>
  );
};

JobWorkerDetails.propTypes = {
  /** func with param {id} */
  getJobWorkerId: PropTypes.func.isRequired,
  /** func with no params */
  getJobWorkerDetail: PropTypes.func.isRequired,
  /** func with no params */
  getJobWorkerRating: PropTypes.func.isRequired,
  loadingOnJobWorkerDetail: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  currentJobWorkerDetail: PropTypes.object.isRequired,
  currentJobWorkerRating: PropTypes.object.isRequired,
};

export default JobWorkerDetails;
