import React from 'react';

import jardinage from 'src/assets/img/jardinage.jpg';

import './competences.scss';

const Competence = () => (

  <div className="competence">
    <h4 className="competence_title">Competence(s)</h4>
    <div className="competence_content">
      <div className="competence_content_illustration">
        <img className="competence_img" src={jardinage} alt="competence" />
        <p className="competence_name">Jardinage</p>
      </div>
      <div className="competence_about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sit aliquid velit omnis facilis deleniti.</p>
      </div>
    </div>
    <div className="competence_content">
      <div className="competence_content_illustration">
        <img className="competence_img" src={jardinage} alt="competence" />
        <p className="competence_name">Jardinage</p>
      </div>
      <div className="competence_about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sit aliquid velit omnis facilis deleniti.</p>
      </div>
    </div>
  </div>
);

export default Competence;
