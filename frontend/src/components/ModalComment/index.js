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
  Message,
} from 'semantic-ui-react';
import Rating from '@material-ui/lab/Rating';


import 'react-rater/lib/react-rater.css';
import './modalComment.scss';

const ModalComment = ({ request, changeFieldComment, submitComment, changeRatingComment, getCommentId, clearSave, isSend }) => {

  const handleChange = (newCom) => {
    console.log(`coucou j'envoi ${newCom.target.value} `);
    changeFieldComment(newCom.target.value, newCom.target.name);
  };

  const handleRate = (newRate) => {
    console.log(`voila evt rate ${newRate.target.value}`);
    changeRatingComment(newRate.target.value);
  };


  const handleSubmit = (evt) => {
    console.log('voila le submit du commentaire');
    evt.preventDefault();
    submitComment();
  };
  const requestRating = request.rating;

  const handleClick = () => {
    getCommentId(request.id);
  };

  const handleClose = () => {
    clearSave();
  };

  return (
    <Modal closeIcon onClose={handleClose} className="modal_comment" trigger={<Button onClick={handleClick}>Laisser un commentaire</Button>} centered={false}>
      <Modal.Header>Dites nous ce que vous pensez des compétences de {request.jobWorker.firstname} en {request.service.title}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" className="comment_image" src={request.jobWorker.image} />
        <Modal.Description>
          <Header>Commentaire & Notation</Header>
          {requestRating && (
            <div className="info_message_comment">
              <Message compact>
                <i className="check circle icon"/> Votre commentaire a bien été pris en compte !
              </Message>
            </div>
          )}
          {!requestRating && (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <p className="info_modalComment"><Icon name="info circle" />Vous pouvez renseigner un commentaire et une note</p>
              <TextArea
                required
                maxLength="200"
                onChange={handleChange}
                placeholder="Laissez votre commentaire ici et n'oubliez pas la note. Merci"
                style={{ border: 'none', width: '100%' }}
              />
              <Rating className="star_modal_comment" onChange={handleRate} />
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
