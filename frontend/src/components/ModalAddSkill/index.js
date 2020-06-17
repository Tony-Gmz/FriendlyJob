import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input } from 'semantic-ui-react';
import Select from 'react-select';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import './ModalAddSkill.scss';

const ModalAddSkill = ({ serviceList, selectedSkillDescription, selectedSkillId, selectedSkillPrice, getNewSkillValue, submitNewSkill, isSave, clearSave, isOpen, openSuccessMessage, closeSuccessMesssage  }) => {

  const handleChange = (evt) => {
    // console.log(`${evt.target.value} + ${evt.target.name}`);
    getNewSkillValue(evt.target.value, evt.target.name);
  };

  const handleSelectChange = (data) => {
    console.log(data.value);
    console.log(data.name);

    getNewSkillValue(data.value, data.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('coucou je suis submit de addSkill');
    submitNewSkill();
    openSuccessMessage();
  };

  const handleClose = () => {
    clearSave();
  };
  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMesssage();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const falseSet = false;

  return (
    <Modal onClose={handleClose} trigger={<Button className="ModalAddSkill_triggerButton" style={{ backgroundColor: '#303f9f', color: '#FFFF' }}>Ajouter une compétence</Button>} closeIcon>
   <Modal.Header className="modalAddSkill_title">Ajout d'une compétence</Modal.Header>
    <Modal.Description>
    <p className="modalAddSkill_description">
      Choisissez une compétence, veuillez indiquer votre prix/horaire, une description et c'est parti !
    </p>
      <div className="modalAddSkill_input">
        <form className="modalAddSkill_form" onSubmit={handleSubmit}>
          <Select
            className="modalAddSkill_select"
            blurInputOnSelect={falseSet}
            onChange={handleSelectChange}
            placeholder="Selectionne un service"
            options={serviceList.map((service) => ({
              key: service.id,
              value: service.title,
              label: service.title,
              name:'selectedSkillId'
            }))}
            isSearchable={falseSet}
            onInputChange="input-change"
            controlShouldRenderValue
          />
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
          <div className="succes_save_message">
            {isSave && (
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleMessageClose}>
              <Alert severity="success">
                La compétence a bien été ajouté ! vous souhaitez retourner sur <a href="/profil">profil</a> ?
              </Alert>
            </Snackbar>
            )}
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
