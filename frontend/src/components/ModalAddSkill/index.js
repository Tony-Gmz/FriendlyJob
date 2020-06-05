import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import './ModalAddSkill.scss';

const ModalAddSkill = ({ serviceList, selectedSkillDescription, selectedSkillId, selectedSkillPrice, getNewSkillValue, submitNewSkill  }) => {

  const handleChange = (evt) => {
    console.log(`${evt.target.value} + ${evt.target.name}`);
    getNewSkillValue(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('coucou je suis submit de addSkill');
    submitNewSkill();
  };

  return (
    <Modal trigger={<Button className="ModalAddSkill_triggerButton" style={{ backgroundColor: '#303f9f', color: '#FFFF' }}>Ajouter une compétence</Button>} closeIcon>
   <Modal.Header className="modalAddSkill_title">Ajout d'une compétence</Modal.Header>
    <Modal.Description>
    <p className="modalAddSkill_description">
      Choisissez une compétence, veuillez indiquer votre prix/horaire, une description et c'est parti !
    </p>
      <div className="modalAddSkill_input">
        <form className="modalAddSkill_form" onSubmit={handleSubmit}>
          <Input className="modalAddSkill_select" list="services" icon="search" name="selectedSkillId" onChange={handleChange} placeholder="Recherchez le service idéale..." />
          <datalist id='services'>
            {serviceList.map((service) => (
              <option key={service.id} value={service.title} />
            ))}
          </datalist>
          <div className="modalSkill_input_content">
           <div className="form_skill_content_price">
            <Input
              label={{ basic: true, content: '/heure' }}
              labelPosition='right'
              placeholder='Indiquez votre prix...'
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
              variant="outlined"
              value={selectedSkillDescription}
              onChange={handleChange}
              name="selectedSkillDescription"
            />
          </div>
          </div>
          <div className="modalAddSkill_submit_button">
            <Button style={{ backgroundColor: 'green', color: '#FFFF' }}>Envoyer</Button>
          </div>
        </form>
      </div>
  </Modal.Description>
  </Modal>
  );
};
ModalAddSkill.propTypes = {
  selectedSkillDescription: PropTypes.string.isRequired,
  selectedSkillId: PropTypes.string.isRequired,
  selectedSkillPrice: PropTypes.string.isRequired,
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default ModalAddSkill;
