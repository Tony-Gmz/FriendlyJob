import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import './presentation.scss';
import { location, useHistory } from 'react-router-dom';
import { selectService } from '../../../action/servicesActions';

// component presentation in homepage

const Presentation = ({ serviceList, fieldService, serviceSelected }) => {
  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('coucou je suis un submit sur la homepage');
    history.push(`/services/${serviceSelected}`);
  };
  const handleChange = (evt) => {
    console.log(`value: ${evt.target.value}`);
    fieldService(evt.target.value);
  };
  return (
    <div className="presentation">
      <h2 className="presentation_title">FriendlyJob</h2>
      <p className="presentation_content">Vous avez besoin d'un jardinier, informaticien ou de faire garder votre enfant ? Friendlyjob et des centaines de JobWorker sont là pour vous. C'est très simple, trouver un service qui correspond à vos attentes, selectionner le JobWorker de votre choix et reservez !
      </p>
      <div className="presentation_input">
        <form onSubmit={handleSubmit} action="">
          <Input list="services" icon="search" name="serviceInput" onChange={handleChange} placeholder="Recherchez le service idéale..." />
          <datalist id='services'>
            {serviceList.map((service) => (
              <option key={service.id} value={service.title} />
            ))}
          </datalist>
        </form>
      </div>
    </div>
  );
};

Presentation.propTypes = {
  serviceSelected: PropTypes.string.isRequired,
  /** Func with param */
  fieldService: PropTypes.func.isRequired,
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
};

export default Presentation;
