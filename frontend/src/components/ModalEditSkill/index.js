import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input, Message } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import './modalEditSkill.scss';
const ModalEditSkill = ({ price, description, id, getSkillId, getNewSkillValue, submitEditSkill, selectedSkillPrice, selectedSkillDescription, clearSave, isSave }) => {


  const handleChange = (evt) => {
    console.log(`${evt.target.value} + ${evt.target.name}`);
    getNewSkillValue(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('coucou je suis submit de addSkill');
    submitEditSkill();
  };

  const handleClick = () => {
    console.log(id);
    getSkillId(id);
  };
  const handleClose = () => {
    clearSave();
  };

  
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
            <Message  positive>
                <Message.Header><i class="check circle icon"></i>Votre modification a bien été prise en compte</Message.Header>
                <p className="message_success">
                  Vous souhaitez revenir sur votre profil ? C'est par ici  <i class="hand point right icon"></i><a href="/profil"><span className="message_connexion">Profil</span></a>
                </p>
            </Message>
          )}
          </div>
            <div className="modalEditSkill_submit_button">
              <Button style={{ backgroundColor: 'green', color: '#FFFF', margin: 'auto' }} type="submit">Envoyer</Button>
          </div>
      </form>
    </Modal.Description>
    </Modal>
  );
};
ModalEditSkill.propTypes = {

};
export default ModalEditSkill;
