import React from 'react';
import Details from './Details';
import Evaluation from './Evaluation';
import Competence from './Competences';


const JobWorkerDetails = () => (
  <div className="jobWorkerDetail">
    <Details />
    <Competence />
    <Evaluation />
  </div>
);

export default JobWorkerDetails;
