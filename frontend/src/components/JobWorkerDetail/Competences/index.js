/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './competences.scss';

const Competence = ({ skills }) => {
  /* console.log(`Competence : ${skills}`); */
  return (
    <div className="competence">
      <h4 className="competence_title">Competence(s)</h4>
      {skills.map((skill) => (
        <div className="competence_content">
          <div className="competence_content_illustration">
            <img className="competence_img" src={skill.service.image} alt="competence" />
            <p className="competence_name">{skill.service.title}</p>
            <div className="competence_price">{skill.price} €/heure</div>
          </div>
          <div className="competence_about">
            <p>{skill.service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Competence.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Competence;
