import React from 'react';
import { Input } from 'semantic-ui-react';
import './presentation.scss';

// component presentation in homepage

const Presentation = () => (

  <div className="presentation">
    <h2 className="presentation_title">FriendlyJob</h2>
    <p className="presentation_content">Vous avez besoin d'un jardinier, informaticien ou de faire garder votre enfant ? Friendlyjob et des centaines de JobWorker sont là pour vous. C'est très simple, trouver un service qui correspond à vos attentes, selectionner le JobWorker de votre choix et reservez !
    </p>
    <div className="presentation_input">
      <Input icon="search" placeholder="Recherchez le service idéale..." />
    </div>
  </div>
);

export default Presentation;
