import React, { useEffect } from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
} from 'semantic-ui-react';

import './modalCancelRequest.scss';


const ModalCancelRequest = ({ request, getCommentId, submitCancelRequest  }) => {
  const handleClick = () => {
    getCommentId(request.id);
  };


  const handleSubmit = (evt) => {
    console.log('voila le submit du commentaire');
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
          <Button color="red">
            <Icon name="remove" /> Non
          </Button>
          <Button type="submit" color="green">
            <Icon name="checkmark" /> Oui
          </Button>
        </Form>
      </Modal.Actions>
    </Modal>
  );
};


export default ModalCancelRequest;
