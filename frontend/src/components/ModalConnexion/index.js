// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Image, Modal, Form, Message } from 'semantic-ui-react';


// == Import
import './modalConnexion.scss';

// == Composant
const ModalConnexion = ({ changeField, submitLoggin, connexionError, getRequest }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit envoyé');
    submitLoggin();
    getRequest();
  };
  const handleChange = (evt) => {
    console.log(`changement du field + ${evt.target.value} + ${evt.target.name}`);
    changeField(evt.target.value, evt.target.name);
  };

  return (

    <Modal trigger={<Button className="modal_button_trigger">Connexion</Button>}>
    <Modal.Header>Espace de Connexion</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Bienvenue</Header>
        <form onSubmit={handleSubmit} className="">
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
            <div className="errorMessage">
              <Message
                error
                header="Une erreur s'est produite lors de la connexion"
                list={[
                  'Verifiez si vous avez indiqué la bonne adresse email.',
                  'N\'oubliez pas que votre mot de passe doit contenir une majuscule, un chiffre et un caractère spéciale.',
                ]}
              />
            </div>
          )}
        </form>
      </Modal.Description>
    </Modal.Content>
      <Modal.Actions>
        <div className="div_submit">
          <Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }} type="button" className="cancel_btn">Annuler</Button>
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
