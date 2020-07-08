import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import { useParams } from 'react-router-dom';
import JobWorkerListTitle from './JobWorkerListTitle';
import JobWorkerMain from './JobWorkerMain';
import Pagination from './Pagination';

// JobWorkerList page component
const JobWorkerList = ({
  changeCurrentPage,
  currentPage,
  joberPerPage,
  getJobWorker,
  currentService,
  jobWorkers,
  loadingOnJobWorkerList,
  getServiceName,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
    getJobWorker();
  }, []);


  const indexOfLastJober = currentPage * joberPerPage;
  const indexOfFirstJober = indexOfLastJober - joberPerPage;
  const currentJobWorker = jobWorkers.slice(indexOfFirstJober, indexOfLastJober);


   //console.log(jobWorkers.length);
  return (
    <>
      {loadingOnJobWorkerList && <Loader />}
      {!loadingOnJobWorkerList && (
        <>
          <JobWorkerListTitle currentService={currentService} />
          <JobWorkerMain
            currentPage={currentPage}
            jobWorkers={currentJobWorker}
            getJobWorker={getJobWorker}
            getServiceName={getServiceName}
          />
          <Pagination
            getJobWorker={getJobWorker}
            getServiceName={getServiceName}
            currentPage={currentPage}
            joberPerPage={joberPerPage}
            totalJobWorker={jobWorkers.length}
            changeCurrentPage={changeCurrentPage}
          />
        </>
      )}
    </>
  );
};

JobWorkerList.propTypes = {
  /** bool */
  loadingOnJobWorkerList: PropTypes.bool.isRequired,
  /** string */
  currentService: PropTypes.string.isRequired,
  /** func with no param */
  getJobWorker: PropTypes.func.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
  /** array */
  jobWorkers: PropTypes.array.isRequired,
  /** func with param */
  getServiceName: PropTypes.func.isRequired,
  /** number */
  currentPage: PropTypes.number.isRequired,
  joberPerPage: PropTypes.number.isRequired,
};

export default JobWorkerList;
