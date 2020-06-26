import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import JobWorkerListTitle from './JobWorkerListTitle';
import JobWorkerMain from './JobWorkerMain';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';

// JobWorkerList page component
const JobWorkerList = ({ changeCurrentPage, currentPage, joberPerPage, getJobWorker, currentService, jobWorkers, loadingOnJobWorkerList, getServiceName }) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
    getJobWorker();
  }, []);


  const indexOfLastJober = currentPage * joberPerPage;
  const indexOfFirstJober = indexOfLastJober - joberPerPage;
  const currentJobWorker = jobWorkers.slice(indexOfFirstJober, indexOfLastJober);


console.log(jobWorkers.length);
  return (
    <>
      {loadingOnJobWorkerList && <Loader />}
      {!loadingOnJobWorkerList && (
        <>
          <JobWorkerListTitle currentService={currentService} />
          <JobWorkerMain jobWorkers={currentJobWorker} getJobWorker={getJobWorker} getServiceName={getServiceName} />
          <Pagination currentPage={currentPage} joberPerPage={joberPerPage} totalJobWorker={jobWorkers.length} changeCurrentPage={changeCurrentPage} />
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
