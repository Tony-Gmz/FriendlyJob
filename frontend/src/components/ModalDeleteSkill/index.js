import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
} from 'semantic-ui-react';


const ModalDeleteSkill = ({ skill, getSkillId, submitDeleteSkill }) => {
  const handleClick = () => {
    // console.log(skill);
    getSkillId(skill);
  };

  const handleSubmit = (evt) => {
    // console.log('voila le submit du delete');
    evt.preventDefault();
    submitDeleteSkill();
  };

  return (
    <Modal trigger={<Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }} onClick={handleClick}>Supprimer</Button>} closeIcon>
      <Header icon="trash" content="supprimer la compétence" />
      <Modal.Content>
        <p>
          La compétence sera supprimée de votre profil. Etes vous sur de vouloir supprimer ?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Form onSubmit={handleSubmit}>
          <Button color="red">
            <Icon name="remove" /> Non
          </Button>
          <Button type="submit" color="green">
            <Icon name="checkmark" /> Oui
          </Button>
        </Form>
      </Modal.Actions>
    </Modal>
  );
};

ModalDeleteSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  getSkillId: PropTypes.func.isRequired,
  submitDeleteSkill: PropTypes.func.isRequired,
};

export default ModalDeleteSkill;
