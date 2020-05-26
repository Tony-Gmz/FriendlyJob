// == Import npm
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';

// == Import
import './modalInscription.scss';
import RadioInscription from './Radio';

// == Composant
const ModalInscription = () => (
  <div className="ModalInscription">
    <a href="#inscription"><NavButtonStyled>Inscription</NavButtonStyled></a>
    <div id="inscription" className="inscription">
      <div className="modal_block">
        <div className="modal_header">
          <p className="modal_title">Bienvenue dans notre espace Inscription</p>
        </div>
        <form>
          <div className="form_element">
            <TextField
              className="input"
              id="outlined-name-input"
              label="Nom"
              type="text"
              autoComplete="current-name"
              variant="outlined"
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
            />
          </div>
          <div className="form_element">
            <InputLabel id="demo-simple-select-label">Departement</InputLabel>
            <Select
              className="input"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Departement"
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
            />
          </div>
        </form>
        <div className="div_radio">
          <RadioInscription />
        </div>
        <div className="div_submit">
          <button className="submit_btn" type="submit">S'inscrire</button>
          <a href="#"><button className="cancel_btn" type="submit">Annuler</button></a>
        </div>
        <a href="#" className="close_btn">close</a>
      </div>
    </div>
  </div>
);

// == Export
export default ModalInscription;
