import React, { useEffect } from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  TextArea,
  Form,
  Icon,
  ModalContent,
  Message
} from 'semantic-ui-react';
import Rating from 'react-rating';


import 'react-rater/lib/react-rater.css';
import './modalComment.scss';

const ModalComment = ({ request, changeFieldComment, submitComment, changeRatingComment, getCommentId, clearSave, isSend }) => {

  const handleChange = (evt) => {
    console.log(`coucou j'envoi ${evt.target.value} + ${evt.target.name}`);
    changeFieldComment(evt.target.value, evt.target.name);
  };

  const handleRate = (newRate) => {
    console.log(`voila evt rate ${newRate}`);
    changeRatingComment(newRate);
  };


  const handleSubmit = (evt) => {
    console.log('voila le submit du commentaire');
    evt.preventDefault();
    submitComment();
  };
  const requestRating = request.rating;
  const handleClick = () => {
    getCommentId(request.id);
    console.log(requestRating);
  };

  const handleClose = () => {
    clearSave();
  };


    
  return (
    <Modal onClose={handleClose} className="modal_comment" trigger={<Button onClick={handleClick}>Laisser un commentaire</Button>} centered={false}>
      <Modal.Header>Dites nous ce que vous pensez des compétences de {request.jobWorker.firstname} en {request.service.title}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" className="comment_image" src={request.jobWorker.image} />
        <Modal.Description>
          <Header>Commentaire & Notation</Header>
          {requestRating && (
            <Message
              success
              header="Status"
              content={<i className="check circle icon">Votre commentaire a bien été pris en comtpe</i>}
            />
          )}
          {!requestRating && (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <TextArea onChange={handleChange} placeholder="Laissez votre commentaire ici et n'oubliez pas la note. Merci" style={{ border: 'none', width: '100%' }} />
              <Rating onChange={handleRate} maxRating={5} />
              <ModalContent>
                <Button icon labelPosition="left">
                  <Icon name="delete" />
                  Annuler
                </Button>
                <Button icon labelPosition="right" type="submit">
                  Envoyer
                  <Icon name="paper plane outline" />
                </Button>
              </ModalContent>
            </Form>
          )}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalComment;
