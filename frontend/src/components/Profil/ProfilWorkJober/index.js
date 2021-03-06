/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-lone-blocks */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Input } from 'semantic-ui-react';


// == Import
import './profilJobWorker.scss';
import ModalSuppression from 'src/containers/ModalSuppression';
import { Link } from 'react-router-dom';
import ModalAddSkill from 'src/containers/ModalAddSkill';
import ModalDeleteSkill from 'src/containers/ModalDeleteSkill';
import ModalEditSkill from 'src/containers/ModalEditSkill';
import UploadImg from 'src/containers/UploadImg';

// == Composant
const ProfilJobWorker = ({
  canEditProfil,
  isEditable,
  firstname,
  lastname,
  email,
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
  urlAvatar,
  toggle,
  isOpen,
  closeSuccessMessage,
  openSuccessMessage,
  errorMessage,
  closeErrorMessage,
  departments,
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
    // console.log(`${evt.target.value} + ${evt.target.name}`);
    editField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    // console.log('coucou je suis le submit de edit profil');
    evt.preventDefault();
    submitEdit();
    openSuccessMessage();
  };
  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMessage();
  };

  const handleErrorMessageClose = () => {
    closeErrorMessage();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className="profilJobWorker">
      <div className="profilJobWorker_desciption">
        Voici votre espace personnel il vous sera utile
        si vous voulez effectuer des changements d'informations
      </div>
      <div className="profil">
        <div className="profil_card">
          <div className="profil_card_avatar">
            {userAvatar && <img className="profil_card_img" alt="Remy Sharp" src={urlAvatar} /> }
            {!userAvatar && <Avatar className="profil_card_img" alt="Remy Sharp" src="" />}
            <div className="profil_card_img_upload">
              {isEditable && <UploadImg urlAvatar={urlAvatar} />}
            </div>
          </div>
        </div>
        <div className="profil_information">
          <form onSubmit={handleSubmit} className="profil_form">
            <div className="form_element_profil">
              <TextField
                className="profil_input"
                id="outlined-name-input"
                value={lastname}
                type="text"
                autoComplete="current-name"
                variant="outlined"
                disabled
              />
            </div>
            <div className="form_element_profil">
              <TextField
                className="profil_input"
                id="outlined-firstname"
                value={firstname}
                type="text"
                autoComplete="current-firstname"
                variant="outlined"
                disabled
              />
            </div>
            {isEditable && (
              <div className="form_element_profil jobWorker_department_select">
                <TextField className="profil_input" id="select" onChange={handleChange} label="Departement" value={departments} name="department" select>
                  {departmentsList.map((depart) => (
                    <MenuItem key={depart.id} value={depart.id}>{depart.name}</MenuItem>
                  ))}
                </TextField>
              </div>
            )}
            {!isEditable && (
              <div className="form_element_profil">
                <TextField className="profil_input" id="select" onChange={handleChange} label="Departement" value={departments} name="department" select disabled>
                  {departmentsList.map((depart) => (
                    <MenuItem key={depart.name} value={depart.id}>{depart.name}</MenuItem>
                  ))}
                </TextField>
              </div>
            )}
            {!isEditable && (
              <div className="form_element_profil">
                <TextField
                  id="outlined-multiline-static"
                  label="A propos"
                  multiline
                  value={editAbout}
                  rows={10}
                  variant="outlined"
                  disabled
                />
              </div>
            )}
            {isEditable && (
              <div className="form_element_profil">
                <TextField
                  id="outlined-multiline-static"
                  label="A propos"
                  multiline
                  rows={4}
                  value={editAbout}
                  variant="outlined"
                  name="editAbout"
                  onChange={handleChange}
                  maxlength="500"
                />
              </div>
            )}
            {isEditable && (
              <div className="form_element_profil">
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
              <div className="form_element_profil">
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
              <div className="form_element_profil">
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
              <div className="form_element_profil">
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
              <div className="form_element_profil">
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
            {isEdited && (
              <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleMessageClose}>
                <Alert onClose={handleMessageClose} severity="success">
                  vos modifications ont bien été pris en compte ! vous souhaitez retourner sur la <a className="link_profil_modal" href="/">page d'accueil</a> ?
                </Alert>
              </Snackbar>
            )}
            {errorMessage && (
              <Snackbar open={open} autoHideDuration={6000} onClose={handleErrorMessageClose}>
                <Alert onClose={handleErrorMessageClose} severity="error">
                  Votre mot de passe doit contenir 8 character minimum, une majuscule, une minuscule et un character spécial
                </Alert>
              </Snackbar>
            )}
            {editPassword !== editConfirmationPassword ? (
              <>
                <div className="error_message_passwordConfirmation"><i className="times circle icon" />Le champ "mot de passe" est différent du champ "confirmation"</div>
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
                    <Button type="submit" className="profil_btn" variant="contained" disabled>
                      Valider
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="profil_group_btn">
                  {isEditable && (
                    <Button onClick={handleCancelClick} className="profil_btn" variant="contained" color="alerte"> Annuler</Button>
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
              </>
            )}
          </form>
          <div className="form_skill">
            <div className="form_skill_description">
              Vous souhaitez changer ou ajouter des compétences ?
              Modifier votre prix horaire ? C'est par ici
            </div>
            {serviceList.map((service) => (
              <div key={service.id}>
                {currentJobWorkerSkills.map((skill) => {
                  const currentSkill = skill.service.id;
                  // console.log(service.id)
                  // console.log(currentSkill);
                  { if (currentSkill === service.id) {
                    return (
                      <div key={service.title} className="form_skill_content">
                        <div className="form_skill_input">
                          <div className="form_skill_content_radio">
                            {service.title}
                          </div>
                          <div className="form_skill_content_price">
                            <Input
                              label={{ basic: true, content: '/heure' }}
                              labelPosition="right"
                              placeholder="Indiquez votre prix..."
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
                    );
                  }
                  }
                },
                )}
              </div>
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
  closeSuccessMessage: PropTypes.func.isRequired,
  openSuccessMessage: PropTypes.func.isRequired,
  closeErrorMessage: PropTypes.func.isRequired,
  /** string */
  editEmail: PropTypes.string,
  editPassword: PropTypes.string,
  editConfirmationPassword: PropTypes.string,
  editAbout: PropTypes.string,
  image: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  urlAvatar: PropTypes.string.isRequired,
  /** bool */
  isEdited: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  errorMessage: PropTypes.bool.isRequired,
  /** number */
  departments: PropTypes.number,
  /** array  */
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  departmentsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  currentJobWorkerSkills: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default ProfilJobWorker;
