import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
} from 'semantic-ui-react';

import './modalCancelRequest.scss';


const ModalCancelRequest = ({ request, getRequestId, submitCancelRequest }) => {
  const handleClick = () => {
    getRequestId(request.id);
  };


  const handleSubmit = (evt) => {
     //console.log('voila le submit du commentaire');
    evt.preventDefault();
    submitCancelRequest();
  };

  return (
    <Modal trigger={<Button onClick={handleClick}>Annuler</Button>} closeIcon>
      <Header icon="trash" content="Annuler le service" />
      <Modal.Content>
        <p>
          Le service sera annuler de maniere definitive. Etes vous sur de vouloir annuler ?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Form onSubmit={handleSubmit}>
          <Button type="submit" color="green">
            <Icon name="checkmark" /> Oui
          </Button>
        </Form>
      </Modal.Actions>
    </Modal>
  );
};

ModalCancelRequest.propTypes = {
  /** func with param */
  getRequestId: PropTypes.func.isRequired,
  /** fucn with no param */
  submitCancelRequest: PropTypes.func.isRequired,
  request: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default ModalCancelRequest;
