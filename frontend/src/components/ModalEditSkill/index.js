import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './modalEditSkill.scss';

const ModalEditSkill = ({ price, description, id, getSkillId, getNewSkillValue, submitEditSkill, selectedSkillPrice, selectedSkillDescription, clearSave, isSave, isOpen, openSuccessMessage, closeSuccessMessage }) => {


  const handleChange = (evt) => {
    console.log(`${evt.target.value} + ${evt.target.name}`);
    getNewSkillValue(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('coucou je suis submit de addSkill');
    submitEditSkill();
    openSuccessMessage();
  };

  const handleClick = () => {
    console.log(id);
    getSkillId(id);
  };
  const handleClose = () => {
    clearSave();
  };

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMessage();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Modal onClose={handleClose} trigger={<Button style={{ backgroundColor: 'green', color: '#FFFF' }} onClick={handleClick}>modifier</Button>} closeIcon>
   <Modal.Header className="modalEditSkill_title">Modifier votre compétence</Modal.Header>
    <Modal.Description >
    <p className="modalEditSkill_description">
      Si vous souhaitez modifier cette compétence veuillez indiquer votre prix/horaire et une description.
    </p>
      <form className="modalEdit_form" onSubmit={handleSubmit} >
      <div className="modalEditSkill_input">
          <div className="form_skill_content_price">
            <Input
              label={{ basic: true, content: '/heure' }}
              labelPosition='right'
              placeholder={price}
              value={selectedSkillPrice}
              onChange={handleChange}
              name="selectedSkillPrice"
            />
          </div>
          <div className="form_skill_content_about">
            <TextField
              id="textArea-skills"
              label="Description"
              multiline
              rows={4}
              placeholder={description}
              variant="outlined"
              value={selectedSkillDescription}
              onChange={handleChange}
              name="selectedSkillDescription"
            />
          </div>
           </div>
           <div className="succes_save_message">
          {isSave && (
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleMessageClose}>
                <Alert onClose={handleMessageClose} severity="success">
                  vos modifications ont bien été pris en compte ! vous souhaitez retourner sur <a href="/profil">profil</a> ?
                </Alert>
              </Snackbar>
          )}
          </div>
            <div className="modalEditSkill_submit_button">
              <Button style={{ backgroundColor: 'green', color: '#FFFF'}} type="submit">Envoyer</Button>
          </div>
      </form>
    </Modal.Description>
    </Modal>
  );
};
ModalEditSkill.propTypes = {

};
export default ModalEditSkill;
