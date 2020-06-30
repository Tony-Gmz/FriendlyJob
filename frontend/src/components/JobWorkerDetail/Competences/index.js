/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './competences.scss';

// eslint-disable-next-line padded-blocks
const Competence = ({ skills }) => {

  return (
    <div className="competence">
      <h4 className="competence_title">Compétence(s)</h4>
      {skills.map((skill) => (
        <div key={skill.id} className="competence_content">
          <div className="competence_content_illustration">
            <img className="competence_img" src={skill.service.image} alt="competence" />
            <p className="competence_name">{skill.service.title}</p>
            <div className="competence_price"> {skill.price}€/heure</div>
          </div>
          <div className="competence_about">
            <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Competence.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Competence;
