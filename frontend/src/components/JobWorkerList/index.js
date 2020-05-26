import React from 'react';
import JobWorkerListTitle from './JobWorkerListTitle';
import JobWorkerMain from './JobWorkerMain';
import ListPagination from './ListPagination';

// JobWorkerList page component
const JobWorkerList = () => (
  <>
    <JobWorkerListTitle />
    <JobWorkerMain />
    <ListPagination />
  </>


);

export default JobWorkerList;
