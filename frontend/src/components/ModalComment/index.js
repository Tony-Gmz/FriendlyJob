import React from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  TextArea,
  Form,
  Icon,
  ModalContent,
} from 'semantic-ui-react';
import Rater from 'react-rater';

import 'react-rater/lib/react-rater.css';
import './modalComment.scss';

const ModalExampleTopAligned = ({ request }) => (
  <Modal className="modal_comment" trigger={<Button>Laisser un commentaire</Button>} centered={false}>
    <Modal.Header>Dites nous ce que vous pensez des compétences de {request.jobWorker.firstname} en {request.service.title}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" className="comment_image" src={request.jobWorker.image} />
      <Modal.Description>
        <Header>Commentaire & Notation</Header>
        <Form>
          <TextArea placeholder="Laissez votre commentaire ici et n'oubliez pas la note. Merci" style={{ border: 'none', width: '100%' }} />
          <Rater rating={4} total={5} />
          <ModalContent>
            <Button icon labelPosition='left'>
              <Icon name='delete' />
              Annuler
            </Button>
            <Button icon labelPosition='right'>
              Envoyer
              <Icon name='paper plane outline' />
            </Button>
          </ModalContent>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalExampleTopAligned;
