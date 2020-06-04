import React, { useEffect } from 'react';
import { Button, Header, Image, Modal, Radio, Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import './ModalAddSkill.scss';

const ModalAddSkill = ({ serviceList, currentJobWorkerSkills, selectedSkillId, selectedSkillPrice, selectedSkillDescription, getNewSkillValue, getJobWorkerSkill, submitNewSkill }) => {

  useEffect(() => {
    getJobWorkerSkill();
  }, []);

  const handleSkillContentChange = (evt) => {
    console.log(`${evt.target.name} + ${evt.target.value}`);
    getNewSkillValue(evt.target.value, evt.target.name);
  };
  const handleSkillChange = (e, data) => {
    const { name, value } = data;
    console.log(`${name} + ${value}`);
    getNewSkillValue(value, name);
  };
  const handleAddSkillSubmit = () => {
    console.log('coucou je suis le submit de addSkill')
    submitNewSkill();
  }
  return (
    <Modal trigger={<Button> Ajouter</Button>}>
      <Modal.Header>Ajout d'une compétence</Modal.Header>
      <form onSubmit={handleAddSkillSubmit} className="form_skill">
        <Modal.Description>
          <Header>Vous souhaitez ajouter une compétence ?</Header>
              <div className="form_skill_description">
                Cochez la compétence choisi, ajoutez votre prix/horaire et une description !
              </div>
          {serviceList.map((service) => (
            <>
              {currentJobWorkerSkills.map((skill) => {
              const currentSkill = skill.service.id;
              // console.log(service.id)
              // console.log(currentSkill);
              { if (currentSkill === service.id) {
                  return (
                    <>
                  <div key={service.id} className="form_skill_content">
                  <div className="form_skill_content_radio">
                    <Radio toggle 
                    id={skill.id}
                    label={service.title}
                    value={service.id}
                    checked
                    />
                  </div>
                  <div className="form_skill_content_price">
                    <Input
                      label={{ basic: true, content: '/heure' }}
                      labelPosition='right'
                      placeholder='Indiquez votre prix...'
                      value={`${skill.price}€`}
                
                    />
                  </div>
                  <div className="form_skill_content_about">
                    <TextField
                      id="textArea-skills"
                      label="Multiline"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      variant="outlined"
                      value={skill.description}
                    />
                  </div>
                </div>
                </>
                );
              }else {
                return (
                  <>
                <div key={service.id} className="form_skill_content">
                  <div className="form_skill_content_radio">
                    <Radio toggle
                    label={service.title}
                    value={service.id}
                    onChange={handleSkillChange}
                    name="selectedSkillId"
                    />
                  </div>
                  <div className="form_skill_content_price">
                    <Input
                      label={{ basic: true, content: '/heure' }}
                      labelPosition='right'
                      type="text"
                      placeholder='Indiquez votre prix...'
                      value={selectedSkillPrice}
                      onChange={handleSkillContentChange}
                      name="selectedSkillPrice"
                    />
                  </div>
                  <div className="form_skill_content_about">
                    <TextField
                      id="textArea-skills"
                      label="Description"
                      type="text"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={selectedSkillDescription}
                      onChange={handleSkillContentChange}
                      name="selectedSkillDescription"
                    />
                  </div>
                </div>
                </>
                )
                
              }
              }
              }
            )}
          </>
        ))}
      </Modal.Description>
      <Modal.Actions>
        <Button type="submit" className="profil_btn" variant="contained" color="primary">
          Valider
        </Button>
      </Modal.Actions>
    </form>
    </Modal>
  );
 
}

export default ModalAddSkill;
