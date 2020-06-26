// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Header, Icon, Image, Modal, Form, Message } from 'semantic-ui-react';

// == Import
import './modalInscription.scss';

// == Composant
const ModalInscription = ({ getAllDepartments, departmentsList, fieldValue, submitSubscribe, isSubscribe, selectValue, errorPasswordMessage, closeErrorMessage, isOpen, openSuccessMessage, closeSuccessMessage, password, confirmPassword, closeErrorMessageInscription, errorInscriptionMessage }) => {
  useEffect(() => {
  
      getAllDepartments();

  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log('coucou je suis submit');
    submitSubscribe();
    openSuccessMessage();
  };
  const handleChange = (evt) => {
    //console.log(`changement du field + ${evt.target.value} + ${evt.target.name}`);
    fieldValue(evt.target.value, evt.target.name);
  };
  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMessage();
  };

  const handleErrorMessageClose = () => {
    closeErrorMessageInscription();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (


    <Modal trigger={<Button className="modal_button_trigger">Inscription</Button>} closeIcon>
    <Modal.Header  className="header_inscription">Espace d'inscription</Modal.Header>
    <Modal.Content image scrolling>
      <Modal.Description>
        <Header>Bienvenue parmis nous</Header>
        <div className="modal_inscription_info"><i class="info circle icon"></i>Les champs suivis de * sont obligatoire pour l'inscription</div>
          {isSubscribe && (
            <Snackbar open={isOpen} autoHideDuration={10000} onClose={handleMessageClose}  anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
                <Alert onClose={handleMessageClose} severity="success">
                  Vous êtes bien inscrit sur FriendlyJob ! Merci de votre confiance.
                  Vous allez recevoir un email de confirmation
                </Alert>
              </Snackbar>
              )}
        <form className="form_inscription" onSubmit={handleSubmit}>
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
              name="confirmPassword"
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
          <Snackbar open={errorInscriptionMessage} autoHideDuration={10000} onClose={handleErrorMessageClose} anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
                <Alert onClose={handleErrorMessageClose} severity="error">
                  Cette adresse email est déja existante veuillez saisir une nouvelle
                </Alert>
              </Snackbar>
          {password !== confirmPassword ? (
            <>
            <div className="error_message_passwordConfirmation"><i className="times circle icon"/>Le champ "mot de passe" est différent du champ "confirmation"</div>
            <Modal.Actions>
            <div className="div_submit">
              <Button style={{ backgroundColor: '#303f9f', color: '#FFFF' }} className="submit_btn" type="submit" disabled>S'inscrire</Button>
            </div>
          </Modal.Actions>
          </>
          ): (
            <Modal.Actions>
            <div className="div_submit">
              <Button style={{ backgroundColor: '#303f9f', color: '#FFFF' }} className="submit_btn" type="submit">S'inscrire</Button>
            </div>
          </Modal.Actions>
          )}
          
        </form>
        
      </Modal.Description>
    </Modal.Content>
    </Modal>

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
