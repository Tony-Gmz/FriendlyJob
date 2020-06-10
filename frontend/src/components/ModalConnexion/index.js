// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

// == Import
import './modalConnexion.scss';

// == Composant
const ModalConnexion = ({ changeField, submitLoggin }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit envoyé');
    submitLoggin();
  };
  const handleChange = (evt) => {
    console.log(`changement du field + ${evt.target.value} + ${evt.target.name}`);
    changeField(evt.target.value, evt.target.name);
  };

  return (
    <div className="ModalConnexion">
      <a href="#connexion"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Connexion</Button></a>
      <div id="connexion" className="connexion">
        <div className="modal_block">
          <div className="modal_header">
            <p className="modal_title">Bienvenue dans notre espace Connexion</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form_element">
              <Form.Input
                className="input"
                label="Email*"
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Email"
                patern="/^[-._a-z0-9]+@[-._a-z0-9]+$/"
                title="Le format de l'adresse mail est incorrecte"
                required
              />
            </div>
            <div className="form_element">
              <Form.Input
                className="input"
                id="outlined-password-input"
                label="Mot de passe*"
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Mot de passe"
                required
              />
            </div>
            <div className="div_submit">
              <button className="submit_btn" type="submit">Connexion</button>
              <button className="cancel_btn" type="submit">Annuler</button>
            </div>
          </form>
          <a href="#" className="close_btn">close</a>
        </div>
      </div>
    </div>
  );
};

ModalConnexion.propTypes = {
  /** func with param */
  changeField: PropTypes.func.isRequired,
  /** finc without param */
  submitLoggin: PropTypes.func.isRequired,
};

// == Export
export default ModalConnexion;
