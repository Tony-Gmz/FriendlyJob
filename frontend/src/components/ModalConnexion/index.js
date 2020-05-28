// == Import npm
import React from 'react';
import TextField from '@material-ui/core/TextField';
import NavButtonStyled from 'src/components/Button/NavButtonStyled';

// == Import
import './modalConnexion.scss';

// == Composant
const ModalConnexion = () => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit envoyé');
  };
  const handleChange = (evt) => {
    console.log(`changement du field + ${evt.target.value} + ${evt.target.name}`);
  };

  return (
    <div className="ModalConnexion">
      <a href="#connexion"><NavButtonStyled>Connexion</NavButtonStyled></a>
      <div id="connexion" className="connexion">
        <div className="modal_block">
          <div className="modal_header">
            <p className="modal_title">Bienvenue dans notre espace Connexion</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form_element">
              <TextField
                className="input"
                id="outlined-password-input"
                label="Adresse Email"
                type="email"
                autoComplete="current-username"
                variant="outlined"
                name="email"
                onChange={handleChange}
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
                name="password"
                onChange={handleChange}
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

// == Export
export default ModalConnexion;
