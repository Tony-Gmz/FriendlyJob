import React from 'react';
import PropTypes from 'prop-types';
import { changeTitle, capitalize } from 'src/utils';
import './jobWorkerListTitle.scss';

const JobWorkerListTitle = ({ currentService }) => (

  <div className="List_title">
    <h1 className="title">Liste des Jobworker spécialisé en {capitalize(changeTitle(currentService))} près de chez vous </h1>
  </div>
);
JobWorkerListTitle.propTypes = {
  currentService: PropTypes.string.isRequired,
};
export default JobWorkerListTitle;
