import React from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
} from 'semantic-ui-react';

import './modalRefuseRequest.scss';


const ModalRefuseRequest = ({ request, getCommentId, submitRefuseRequest }) => {
  const handleClick = () => {
    getCommentId(request.id);
  };


  const handleSubmit = (evt) => {
    console.log('voila le submit du commentaire');
    evt.preventDefault();
    submitRefuseRequest();
  };

  return (
    <Modal trigger={<Button onClick={handleClick}>Refuser</Button>} closeIcon>
      <Header icon="trash" content="Refuser le service" />
      <Modal.Content>
        <p>
          Si vous refuser ce service vous ne pourrez pas contacter le FriendlyUser et le service ne sera plus accessible..
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


export default ModalRefuseRequest;
