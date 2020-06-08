/* eslint-disable no-lone-blocks */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import profil from 'src/assets/img/screenshot.png';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Radio, Input } from 'semantic-ui-react';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import { whitoutAvatar } from 'src/utils';

// == Import
import './profilJobWorker.scss';
import ModalSuppression from 'src/containers/ModalSuppression';
import { Link } from 'react-router-dom';
import { add } from 'date-fns/esm';
import ModalAddSkill from 'src/containers/ModalAddSkill';
import ModalDeleteSkill from 'src/containers/ModalDeleteSkill';
import ModalEditSkill from 'src/containers/ModalEditSkill';
import UploadImg from 'src/containers/UploadImg';
import { FormControl } from '@material-ui/core';

// == Composant
const ProfilJobWorker = ({
  canEditProfil,
  isEditable,
  image,
  firstname,
  lastname,
  department,
  email,
  about,
  cancelEdit,
  departmentsList,
  submitEdit,
  editField,
  editEmail,
  editPassword,
  editConfirmationPassword,
  isEdited,
  editAbout,
  getJobWorkerSkill,
  serviceList,
  currentJobWorkerSkills,
  getNewSkillValue,
  selectedSkillDescription,
  selectedSkillId,
  selectedSkillPrice,
  urlAvatar,
  toggle,
}) => {
  useEffect(() => {
    getJobWorkerSkill();
  }, [toggle]);

  // console.log(currentJobWorkerSkills);
  const userAvatar = urlAvatar;
  const handleClick = () => {
    canEditProfil();
  };
  const handleCancelClick = () => {
    cancelEdit();
  };
  const handleChange = (evt) => {
    console.log(`${evt.target.value} + ${evt.target.name}`);
    editField(evt.target.value, evt.target.name);
  };
  const handleRadioChange = (e, data) => {
    const { name, value } = data;
    console.log(`${name} + ${value}`);
    getNewSkillValue(value, name);
  };
  const handleSubmit = (evt) => {
    console.log('coucou je suis le submit de edit profil');
    evt.preventDefault();
    submitEdit();
  };
  const handleRadioRemoveChange = (e, data) => {
    const {id, value} = data;
  };
  return (
    <div className="profilJobWorker">
      <div className="profilJobWorker_desciption">
        Voici votre espace personnel il vous sera utile si vous voulez effectuer des changements d'informations
      </div>
      <div className="profil">
        <div className="profil_card">
          <div className="profil_title">{firstname}</div>
          <div className="profil_card_img">
            {userAvatar && <Avatar alt="Remy Sharp" src={urlAvatar} /> }
            {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(firstname)}</Avatar>}
            <div className="profil_card_img_upload">
              {isEditable && <UploadImg urlAvatar={urlAvatar} />}
            </div>
          </div>
        </div>
        <div className="profil_information">
          <form onSubmit={handleSubmit} className="profil_form">
            <div className="form_element">
              <TextField
                className="profil_input"
                id="outlined-name-input"
                label='Nom'
                value={lastname}
                type="text"
                autoComplete="current-name"
                variant="outlined"
                disabled
              />
            </div>
            <div className="form_element">
              <TextField
                className="profil_input"
                id="outlined-firstname-input"
                label="Prénom"
                value={firstname}
                type="text"
                autoComplete="current-firstname"
                variant="outlined"
                disabled
              />
            </div>
            {isEditable && (
              <div className="form_element jobWorker_department_select">
                <TextField className="profil_input" id="select" onChange={handleChange} label="Departement" name="department" select>
                  {departmentsList.map((depart) => (
                    <MenuItem value={depart.id}>{depart.name}</MenuItem>
                  ))}
                </TextField>
              </div>
            )}
            {!isEditable && (
              <div className="form_element">
                <TextField className="profil_input" id="select" label="Departement" value={department} select disabled>
                  <MenuItem value={department.id}>{department.name}</MenuItem>
                </TextField>
              </div>
            )}
            {!isEditable && (
              <div className="form_element">
                <TextField
                  id="outlined-multiline-static"
                  label="A propos"
                  multiline
                  value={about}
                  rows={10}
                  defaultValue="Default Value"
                  variant="outlined"
                  disabled
                />
              </div>
            )}
            {isEditable && (
              <div className="form_element">
                <TextField
                  id="outlined-multiline-static"
                  label="A propos"
                  multiline
                  rows={4}
                  value={editAbout}
                  variant="outlined"
                  name="editAbout"
                  onChange={handleChange}
                />
              </div>
            )}
            {isEditable && (
              <div className="form_element">
                <TextField
                  className="profil_input"
                  id="outlined-email-input"
                  label="Email"
                  value={editEmail}
                  placeholder={email}
                  type="email"
                  variant="outlined"
                  onChange={handleChange}
                  name="editEmail"
                />
              </div>
            )}
            {!isEditable && (
              <div className="form_element">
                <TextField
                  className="profil_input"
                  label="Email"
                  type="email"
                  value={email}
                  autoComplete="current-email"
                  variant="outlined"
                  onChange={handleChange}
                  disabled
                />
              </div>
            )}
            {!isEditable && (
              <div className="form_element">
                <TextField
                  className="profil_input"
                  id="outlined-firstname-input"
                  label="Mot de Passe"
                  value="password"
                  type="password"
                  autoComplete="current-firstname"
                  variant="outlined"
                  disabled
                />
              </div>
            )}
            {isEditable && (
              <div className="form_element">
                <TextField
                  className="profil_input"
                  id="outlined-password-input"
                  label="Mot de passe"
                  value={editPassword}
                  type="password"
                  autoComplete="current-firstname"
                  variant="outlined"
                  onChange={handleChange}
                  name="editPassword"
                />
              </div>
            )}
            {isEditable && (
              <div className="form_element">
                <TextField
                  className="profil_input"
                  id="outlined-password-input"
                  label="Confirmation du Mot de passe"
                  value={editConfirmationPassword}
                  type="password"
                  autoComplete="current-firstname"
                  variant="outlined"
                  name="editConfirmationPassword"
                  onChange={handleChange}
                />
              </div>
            )}
            {isEdited && <div>Vos modifications ont bien été prises en compte</div>}
            <div className="profil_group_btn">
              {isEditable && (
                <Link to="/"><Button onClick={handleCancelClick} className="profil_btn" variant="contained" color="alerte"> Annuler</Button></Link>
              )}
              {!isEditable && (
                <Button onClick={handleClick} className="profil_btn" variant="contained" color="primary">
                  Modifier
                </Button>
              )}
              {isEditable && (
                <Button type="submit" className="profil_btn" variant="contained">
                  Valider
                </Button>
              )}
            </div>
          </form>
          <div className="form_skill">
            <div className="form_skill_description">
              Vous souhaitez changer ou ajouter des compétences ? Modifier votre prix horaire ? C'est par ici 
            </div>
            {serviceList.map((service) => (
              <>
                {currentJobWorkerSkills.map((skill) => {
                  const currentSkill = skill.service.id;
                  //console.log(service.id)
                  // console.log(currentSkill);
                  { if (currentSkill === service.id) {
                     return (
                       <>
                      <div key={service.id} className="form_skill_content">
                      <div className="form_skill_input">
                      <div className="form_skill_content_radio">
                       {service.title}
                      
                      </div>
                      <div className="form_skill_content_price">
                        <Input
                          label={{ basic: true, content: '/heure' }}
                          labelPosition='right'
                          placeholder='Indiquez votre prix...'
                          value={`${skill.price}€`}
                          disabled
                        />
                      </div>
                      <div className="form_skill_content_about">
                        <TextField
                          id="textArea-skills"
                          label="Description"
                          multiline
                          rows={4}
                          defaultValue="Default Value"
                          variant="outlined"
                          value={skill.description}
                          disabled
                        />
                        </div>
                        </div>
                        <div className="form_skill_button">
                          <div>
                            <ModalEditSkill {...skill} />
                          </div>
                      <div>
                      <ModalDeleteSkill skill={skill.id} />
                      </div>
                      </div>
                      </div>
                    </>
                    );
                  }
                  }
                  }
                )}
              </>
            ))}
            <div className="skill_modal">
              <div>
                <ModalAddSkill />
              </div>
            </div>
          </div>
          <ModalSuppression />
        </div>
      </div>
    </div>

  );
};

ProfilJobWorker.propTypes = {
  /** func with params */
  editField: PropTypes.func.isRequired,
  /** func without param */
  canEditProfil: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
  getJobWorkerSkill: PropTypes.func.isRequired,
  /** string */
  editEmail: PropTypes.string.isRequired,
  editPassword: PropTypes.string.isRequired,
  editConfirmationPassword: PropTypes.string.isRequired,
  editAbout: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  /** bool */
  isEdited: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
  /** array  */
  departmentsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

};
// == Export
export default ProfilJobWorker;
