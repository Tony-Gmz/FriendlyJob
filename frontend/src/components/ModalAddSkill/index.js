import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';

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
    <Modal trigger={<Button>Ajouter une compétence</Button>} closeIcon>
<Modal.Header>Select a Photo</Modal.Header>
  <Modal.Description>
    <p>
      Si vous souhaitez ajouter cette compétence veuillez indiquer votre prix/horaire et une description.
    </p>
      <div className="modalAddSkill_input">
        <form onSubmit={handleSubmit}>
          <Input list="services" icon="search" name="selectedSkillId" onChange={handleChange} placeholder="Recherchez le service idéale..." />
          <datalist id='services'>
            {serviceList.map((service) => (
              <option key={service.id} value={service.title} />
            ))}
          </datalist>
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
          <div>
            <button type="submit">Envoyer</button>
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
