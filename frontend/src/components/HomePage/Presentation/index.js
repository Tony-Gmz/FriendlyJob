import React from 'react';
import { Input } from 'semantic-ui-react';
import './presentation.scss';
import { location, useHistory } from 'react-router-dom';

// component presentation in homepage

const Presentation = () => {
  let history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('coucou je suis un submit sur la homepage');
    history.push("/services/jardinage");
  };
  const handleChange = (evt) => {
    console.log(`value: ${evt.target.value}`);
  };
  return (
    <div className="presentation">
      <h2 className="presentation_title">FriendlyJob</h2>
      <p className="presentation_content">Vous avez besoin d'un jardinier, informaticien ou de faire garder votre enfant ? Friendlyjob et des centaines de JobWorker sont là pour vous. C'est très simple, trouver un service qui correspond à vos attentes, selectionner le JobWorker de votre choix et reservez !
      </p>
      <div className="presentation_input">
        <form onSubmit={handleSubmit} action="">
          <Input icon="search" name="serviceInput" onChange={handleChange} placeholder="Recherchez le service idéale..." />
        </form>
      </div>
    </div>
  );
};

export default Presentation;
