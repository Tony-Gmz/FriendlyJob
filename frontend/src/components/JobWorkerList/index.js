import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import JobWorkerListTitle from './JobWorkerListTitle';
import JobWorkerMain from './JobWorkerMain';

// JobWorkerList page component
const JobWorkerList = ({ getJobWorker, currentService, jobWorkers, loadingOnJobWorkerList }) => {
  useEffect(() => {
    getJobWorker();
  }, []);

  console.log(jobWorkers);

  return (
    <>
      {loadingOnJobWorkerList && <Loader />}
      {!loadingOnJobWorkerList && (
        <>
          <JobWorkerListTitle currentService={currentService} />
          <JobWorkerMain jobWorkers={jobWorkers} />
        </>
      )}
    </>
  );
};

JobWorkerList.propTypes = {
  loadingOnJobWorkerList: PropTypes.bool.isRequired,
  currentService: PropTypes.string.isRequired,
  getJobWorker: PropTypes.func.isRequired,
  jobWorkers: PropTypes.array.isRequired,
};

export default JobWorkerList;
