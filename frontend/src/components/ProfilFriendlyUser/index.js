// == Import npm
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import profil from 'src/assets/img/screenshot.png';
import Button from '@material-ui/core/Button';


// == Import
import './profil.scss';

// == Composant
const ProfilFiendlyUser = () => (
  <div className="profilFiendlyUser">
    <div className="profilFiendlyUser_desciption">
      Voici votre espace personnel il vous sera utile si vous voulez effectuer des changements d'informations
    </div>
    <div className="profil">
      <div className="profil_card">
        <img className="profil_img" src={profil} alt="profil's" />
        <div className="profil_title">Tony</div>
      </div>
      <div className="profil_information">
        <form className="profil_form">
          <div className="form_element">
            <TextField
              className="profil_input"
              id="outlined-name-input"
              defaultValue="TONY"
              type="text"
              autoComplete="current-name"
              variant="outlined"
              disabled
            />
          </div>
          <div className="form_element">
            <TextField
              className="profil_input"
              id="outlined-firstname-input"
              label="KOMOUK"
              type="text"
              autoComplete="current-firstname"
              variant="outlined"
              disabled
            />
          </div>
          <div className="form_element">
            <TextField className="profil_input" id="select" label="Departement" value="" select disabled>
              <MenuItem value={1}>Ain</MenuItem>
              <MenuItem value={2}>Aisne</MenuItem>
              <MenuItem value={3}>Allier</MenuItem>
              <MenuItem value={4}>Hautes-Alpes</MenuItem>
              <MenuItem value={5}>Ardèche</MenuItem>
              <MenuItem value={6}>Aveyron</MenuItem>
              <MenuItem value={7}>Charente-Inférieure</MenuItem>
              <MenuItem value={8}>Dordogne</MenuItem>
            </TextField>
          </div>
          <div className="form_element">
            <TextField
              className="profil_input"
              id="outlined-email-input"
              label="Tony126@hotmail.fr"
              type="email"
              autoComplete="current-email"
              variant="outlined"
              disabled
            />
          </div>
          <div className="profil_group_btn">
            <Button className="profil_btn" variant="contained" color="primary">
              Modifier
            </Button>
            <Button className="profil_btn" variant="contained" disabled>
              Valider
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

// == Export
export default ProfilFiendlyUser;
