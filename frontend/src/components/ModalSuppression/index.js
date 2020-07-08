import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ModalSuppression = ({ isDelete, submitDelete }) => {
  const handleDeleteSubmit = (evt) => {
    evt.preventDefault();
    submitDelete();
  };

  return (
    <Modal trigger={<Button basic color="red">supprimer votre compte</Button>} basic size="small" closeIcon>
      <Header icon="trash alternate icon" content="Vous souhaitez déjà nous quitter ?" />
      {!isDelete && (
        <>
          <Modal.Content>
            <p>
              Etes-vous sûr de vouloir supprimer votre compte ?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <form className="form_modal_delete" onSubmit={handleDeleteSubmit}>
              <Button basic color="red" inverted>
                <Icon name="remove" close /> No
              </Button>
              <a href="/">
                <Button type="submit" color="green" inverted>
                  <Icon name="checkmark" /> Yes
                </Button>
              </a>
            </form>
          </Modal.Actions>
        </>
      )}
      {isDelete && (
        <>
          <Modal.Content>
            <p>
              <span className="delete_message">Votre compte a bien été supprimé !</span>
              Nous sommes triste mais on espère vous revoir bientôt !
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/">
              <Button basic color="red" inverted>
                <Icon name="remove" close /> revenir à la page d'accueil
              </Button>
            </Link>
          </Modal.Actions>
        </>
      )}
    </Modal>
  );
};

ModalSuppression.propTypes = {
  isDelete: PropTypes.bool.isRequired,
  /** func with no params */
  submitDelete: PropTypes.func.isRequired,
};

export default ModalSuppression;
