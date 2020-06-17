// == Import Library
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { Icon } from 'semantic-ui-react';

// == Import Style
import './presentation.scss';

// == Import Utils
import { slugifyTitle } from 'src/utils';

// component presentation in homepage
const Presentation = ({ serviceList, fieldService, serviceSelected }) => {

  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/services/${serviceSelected}`);
  };

  const handleChange = (serviceSelected) => {
    fieldService(slugifyTitle(serviceSelected.value));
    console.log(serviceSelected);
    console.log(serviceSelected.value);
    console.log(serviceSelected.name);
  };

  
  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      history.push(`/services/${serviceSelected}`);
    }
  };

  const falseSet = false;

  return (
    <div className="presentation">
      <h2 className="presentation_title">FriendlyJob oui ! Mais pourquoi faire ?</h2>
      <p className="presentation_content">Vous avez besoin d'un jardinier, d'un informaticien ou bien de faire garder votre enfant ? Friendlyjob et des centaines de JobWorkers sont là pour vous. C'est très simple, trouvez un service qui correspond à vos attentes, selectionnez le JobWorker de votre choix et reservez !
      </p>
      <div className="presentation_input">
        <form onSubmit={handleSubmit} action="" className="homepage_search_input">
          <Select
            blurInputOnSelect={falseSet}
            name="serviceInput"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Selectionnez un service"
            options={serviceList.map((service) => ({
              key: service.id,
              value: service.title,
              label: service.title,
            }))}
            // value={serviceSelected}
            isSearchable={falseSet}
            onInputChange="input-change"
            controlShouldRenderValue
          />
          <button type="submit" class="homepage_search_btn"><Icon name="search" /></button>
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Presentation;
