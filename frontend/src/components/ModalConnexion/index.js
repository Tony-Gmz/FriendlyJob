// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Image, Modal, Form, Message } from 'semantic-ui-react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


// == Import
import './modalConnexion.scss';

// == Composant
const ModalConnexion = ({ isConfirmed, checkUserConfirmed, changeField, submitLoggin, connexionError, getRequest, closeSuccessMessage, closeErrorConnexionMessage, closeErrorConfirmedMessage, errorConfirmedMessage, errorMessage, errorConnexionMessage }) => {

  const handleSubmit = (evt) => {
     evt.preventDefault();
      checkUserConfirmed();
  };
  const handleChange = (evt) => {
    console.log(`changement du field + ${evt.target.value} + ${evt.target.name}`);
    changeField(evt.target.value, evt.target.name);
  };

  const handleKey = (evt) => {
    console.log(evt.key);
    if (evt.key === 'Enter') {
      checkUserConfirmed();
    }
  };

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMessage();
  };

  const handleErrorConfirmedMessageClose = () => {
    closeErrorConfirmedMessage();
  };
  const handleErrorMessageClose = () => {
    closeErrorConnexionMessage();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  console.log(errorConfirmedMessage);

  return (

    <Modal trigger={<Button id="triggerInscription" className="modal_button_trigger">Connexion</Button>} closeIcon>
    <Modal.Header className="header_connexion">Espace de Connexion</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Bienvenue</Header>
        {isConfirmed === false
        ? 
        <Snackbar 
        open={errorConfirmedMessage} 
        autoHideDuration={6000} 
        onClose={handleErrorConfirmedMessageClose}
        >
            <Alert onClose={handleErrorConfirmedMessageClose} severity="error">
             Afin d'effectuer votre première connexion, vous devez confirmer votre adresse mail
            </Alert>
          </Snackbar>
          : '' }
        <form onSubmit={handleSubmit} onKeyDown={handleKey} className="">
          <div className="form_element_connexion">
            <Form.Input
              className="input_connexion"
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
          <div className="form_element_connexion">
            <Form.Input
              className="input_connexion"
              id="outlined-password-input"
              label="Mot de passe*"
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Mot de passe"
              required
            />
          </div>
          {connexionError && (
            <Snackbar 
              open={errorConnexionMessage} 
              autoHideDuration={6000} 
              onClose={handleErrorMessageClose}
            >
            <Alert onClose={handleErrorMessageClose} severity="error">
             Votre email ou votre mot de passe est incorrect
            </Alert>
          </Snackbar>
          )}
        </form>
      </Modal.Description>
    </Modal.Content>
      <Modal.Actions>
        <div className="div_submit">
          <Button style={{ backgroundColor: '#303f9f', color: '#FFFF' }} onClick={handleSubmit} className="submit_btn" type="submit">Connexion</Button>
        </div>
      </Modal.Actions>
    </Modal>
  );
};

ModalConnexion.propTypes = {
  /** func with param */
  changeField: PropTypes.func.isRequired,
  /** finc without param */
  submitLoggin: PropTypes.func.isRequired,
  /** array */
  connexionError: PropTypes.array.isRequired,
};

// == Export
export default ModalConnexion;
