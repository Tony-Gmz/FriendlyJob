// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from 'semantic-ui-react';

// == Import
import './modalInscription.scss';

// == Composant
const ModalInscription = ({ fieldValue, submitSubscribe, isSubscribe, selectValue }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('coucou je suis submit');
    submitSubscribe();
  };
  const handleChange = (evt) => {
    console.log(`changement du field + ${evt.target.value} + ${evt.target.name}`);
    fieldValue(evt.target.value, evt.target.name);
  };

  const NumbSelectValue = Number(selectValue);

  return (
    <div className="ModalInscription">
      <a href="#inscription"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Inscription</Button></a>
      <div id="inscription" className="inscription">
        <div className="modal_block">
          <div className="modal_header">
            <p className="modal_title">Bienvenue dans notre espace Inscription</p>
          </div>
          {isSubscribe && <div>Vous êtes bien inscrit sur FriendlyJob, merci de votre confiance</div>}
          <form onSubmit={handleSubmit}>
            <div className="form_element">
              <TextField
                className="input"
                id="outlined-name-input"
                label="Nom"
                type="text"
                autoComplete="current-name"
                variant="outlined"
                onChange={handleChange}
                name="nom"
              />
            </div>
            <div className="form_element">
              <TextField
                className="input"
                id="outlined-firstname-input"
                label="Prenom"
                type="text"
                autoComplete="current-firstname"
                variant="outlined"
                onChange={handleChange}
                name="prenom"
              />
            </div>
            <div className="form_element">
              <InputLabel id="demo-simple-select-label">Departement</InputLabel>
              <Select
                className="input"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={NumbSelectValue}
                onChange={handleChange}
                name="departement"
              >
                <MenuItem value={1}>Ain</MenuItem>
                <MenuItem value={2}>Aisne</MenuItem>
                <MenuItem value={3}>Allier</MenuItem>
                <MenuItem value={4}>Hautes-Alpes</MenuItem>
                <MenuItem value={5}>Ardèche</MenuItem>
                <MenuItem value={6}>Aveyron</MenuItem>
                <MenuItem value={7}>Charente-Inférieure</MenuItem>
                <MenuItem value={8}>Dordogne</MenuItem>
              </Select>
            </div>
            <div className="form_element">
              <TextField
                className="input"
                id="outlined-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="form_element">
              <TextField
                className="input"
                id="outlined-password-input"
                label="Mot de passe"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="form_element">
              <TextField
                className="input"
                id="outlined-passwordConfirmation-input"
                label="Confirmation du mot de passe"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={handleChange}
                name="confirm-password"
              />
            </div>
            <div className="div_radio">
              <FormLabel component="legend">Besoin d'un service ou mettre en exergue vos compétences ? Choisissez votre rôle !</FormLabel>
              <RadioGroup className="radio_inscription_item" aria-label="gender" name="gender1">
                <FormControlLabel value="JOBWORKER" control={<Radio />} label="JobWorker" onChange={handleChange} name="roles" />
                <FormControlLabel value="FRIENDLY_USER" control={<Radio />} label="FriendlyUser" onChange={handleChange} name="roles" />
              </RadioGroup>
            </div>
            <div className="div_submit">
              <button className="submit_btn" type="submit">S'inscrire</button>
              <a href="#"><button className="cancel_btn" type="submit">Annuler</button></a>
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
