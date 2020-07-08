import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
} from 'semantic-ui-react';

import './modalRefuseRequest.scss';


const ModalRefuseRequest = ({
  request,
  getRequestId,
  submitRefuseRequest,
  clearRefuse,
}) => {
  const handleClick = () => {
    getRequestId(request.id);
  };


  const handleSubmit = (evt) => {
    // console.log('voila le submit du commentaire');
    evt.preventDefault();
    submitRefuseRequest();
  };
  // Handle on close for cleaning refuse on state.
  const handleClose = () => {
    clearRefuse();
  };

  return (
    <Modal onClose={handleClose} trigger={<Button onClick={handleClick}>Refuser</Button>} closeIcon>
      <Header icon="trash" content="Refuser le service" />
      <Modal.Content>
        <p>
          Si vous refuser ce service vous ne pourrez pas contacter
          le FriendlyUser et le service ne sera plus accessible..
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

ModalRefuseRequest.propTypes = {
  request: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  // func without param
  getRequestId: PropTypes.func.isRequired,
  submitRefuseRequest: PropTypes.func.isRequired,
  clearRefuse: PropTypes.func.isRequired,
};


export default ModalRefuseRequest;
