import React from 'react';
import NavBar from 'src/components/NavBar';
import JobWorkerListTitle from './JobWorkerListTitle';
import JobWorkerMain from './JobWorkerMain';
import ListPagination from './ListPagination';

const JobWorkerList = () => (
  <>
  <JobWorkerListTitle />
  <JobWorkerMain />
  <ListPagination />
  </>


);

export default JobWorkerList;
