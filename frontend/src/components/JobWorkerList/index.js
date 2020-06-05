import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import JobWorkerListTitle from './JobWorkerListTitle';
import JobWorkerMain from './JobWorkerMain';
import { useParams } from 'react-router-dom';

// JobWorkerList page component
const JobWorkerList = ({ getJobWorker, currentService, jobWorkers, loadingOnJobWorkerList, getServiceName }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
    getJobWorker();
  }, []);


  return (
    <>
      {loadingOnJobWorkerList && <Loader />}
      {!loadingOnJobWorkerList && (
        <>
          <JobWorkerListTitle currentService={currentService} />
          <JobWorkerMain jobWorkers={jobWorkers} getJobWorker={getJobWorker} getServiceName={getServiceName} />
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
