// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, Message, Form, Select } from 'semantic-ui-react';

// == Import
import './modalInscription.scss';

// == Composant
const ModalInscription = ({ departmentsList, fieldValue, submitSubscribe, isSubscribe, selectValue }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('coucou je suis submit');
    submitSubscribe();
  };
  const handleChange = (evt) => {
    console.log(`changement du field + ${evt.target.value} + ${evt.target.name}`);
    fieldValue(evt.target.value, evt.target.name);
  };

  return (
    <div className="ModalInscription">
      <a href="#inscription"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Inscription</Button></a>
      <div id="inscription" className="inscription" >
        <div className="modal_block">
          <div className="modal_header">
            <p className="modal_title">Bienvenue dans notre espace Inscription</p>
          </div>
          {!isSubscribe && <div className="modal_inscription_info"><i class="info circle icon"></i>Les champs précédés de * sont obligatoire pour l'inscription</div>}
          {isSubscribe && (
            <Message positive>
              <Message.Header>Vous êtes bien inscrit sur le site FriendlyJob</Message.Header>
              <p className="message_success">
                Merci pour votre confiance ! Vous pouvez dorénavant vous <a href="#connexion"><span className="message_connexion">connecter</span></a>
              </p>
            </Message>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form_element_inscription">
              <Form.Input
                className="input_inscription"
                label="Nom*"
                type="text"
                onChange={handleChange}
                name="nom"
                placeholder="Nom"
                pattern="[A-Za-z]{2,}"
                title="Votre Nom doit au moins avoir deux caractere et ne doit contenir aucun chiffre"
                maxLength="30"
                minLength="2"
                required
              />
            </div>
            <div className="form_element_inscription">
              <Form.Input
                className="input_inscription"
                label="Prenom*"
                type="text"
                onChange={handleChange}
                name="prenom"
                placeholder="Prenom"
                pattern="[A-Za-z]{2,}"
                title="Votre Prenom doit au moins avoir deux caractere et ne doit contenir aucun chiffre"
                maxLength="30"
                minLength="2"
                required
              />
            </div>
            <div className="form_element_inscription_department">
              <label>
                Departement*
              </label>
              <select
                className="inputDepartment"
                label="Departement"
                onChange={handleChange}
                name="departement"
                required
              >
                {departmentsList.map((departement) => (
                  <option
                    key={departement.number}
                    value={departement.id}
                  >
                    {departement.name}-({departement.number})
                  </option>
                ))}
              </select>
            </div>
            <div className="form_element_inscription">
              <Form.Input
                className="input_inscription"
                label="Email*"
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Email"
                patern="/^[-._a-z0-9]+@[-._a-z0-9]+$/"
                required
              />
            </div>
            <div className="form_element_inscription">
              <Form.Input
                className="input_inscription"
                id="outlined-password-input"
                label="Mot de passe*"
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Mot de passe"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-.]).{8,100}$"
                title="Votre mot de passe doit contenir au moins : huit caracteres dont une minuscule, une majuscule, un chiffre et un caractere special (ex:=$?!.;/@...)"
                minLength="8"
                required
              />
            </div>
            <div className="form_element_inscription">
              <Form.Input
                className="input_inscription"
                label="Confirmation*"
                type="password"
                onChange={handleChange}
                name="confirm-password"
                placeholder="Confirmation du mot de passe"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-.]).{8,100}$"
                title="la confirmation n'est pas identique au mot de passe"
                minLength="8"
                required
              />
            </div>
            <div className="div_radio">
              <FormLabel required component="legend">Besoin d'un service ou mettre en exergue vos compétences ? Choisissez votre rôle</FormLabel>
              <RadioGroup className="radio_inscription_item" aria-label="gender" name="gender1">
                <FormControlLabel value="JOBWORKER" control={<Radio />} label="JobWorker" onChange={handleChange} name="roles"  />
                <FormControlLabel value="FRIENDLY_USER" control={<Radio />} label="FriendlyUser" onChange={handleChange} name="roles"  />
              </RadioGroup>
            </div>
            <div className="div_submit">
              <a href="#"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}  type="button" className="cancel_btn">Annuler</Button></a>
              <Button style={{ backgroundColor: '#303f9f', color: '#FFFF' }} className="submit_btn" type="submit">S'inscrire</Button>
            </div>
          </form>
          <a href="#" className="close_btn">close</a>
        </div>
      </div>
    </div>
  );
};

ModalInscription.propTypes = {
  /** Func without param */
  submitSubscribe: PropTypes.func.isRequired,
  /** Func with param */
  fieldValue: PropTypes.func.isRequired,
  /** Bool */
  isSubscribe: PropTypes.bool.isRequired,
  selectValue: PropTypes.number.isRequired,
};

// == Export
export default ModalInscription;
