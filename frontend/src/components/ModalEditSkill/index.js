import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';

const ModalEditSkill = ({ price, description, id, getSkillId, getNewSkillValue, submitEditSkill, selectedSkillPrice, selectedSkillDescription }) => {


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
  return (
    <Modal trigger={<Button onClick={handleClick}>modifier</Button>} closeIcon>
   <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Description>
    <p>
      Si vous souhaitez modifier cette compétence veuillez indiquer votre prix/horaire et une description.
    </p>
      <form onSubmit={handleSubmit} className="modalAddSkill_input">
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
          <div>
            <button type="submit">Envoyer</button>
          </div>
      </form>
    </Modal.Description>
    </Modal>
  );
};
ModalEditSkill.propTypes = {

};
export default ModalEditSkill;
