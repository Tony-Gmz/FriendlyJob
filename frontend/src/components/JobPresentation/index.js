import React from 'react';
import Jober from './Jober';
import './jobpresentation.scss';
import NavButtonStyled from '../Button/NavButtonStyled';

// component for jobworker presentation in homepage

const JobPresentation = () => (

  <div className="jobpresentation">
    <div className="jobpresentation_title">
      <h2>Comme Thibault deviens un super jobWorker</h2>
    </div>
    <div className="jobpresentation_card">
      <div className="jobercard">
        <Jober />
      </div>
    </div>
    <div className="jobpresentation_content">
      <p> Vous avez une passion ou une compètence que vous souhaitez exercer de manière plus assidut et rémunerer ?
        Alors inscris-toi et devient le jobWorker préféré de tes voisins !
      </p>
    </div>
    <div>
      <a href="#inscription"><NavButtonStyled>Let's go</NavButtonStyled></a>
    </div>
  </div>
);

export default JobPresentation;
