// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Form } from 'semantic-ui-react';

import UploadImg from 'src/containers/UploadImg';


// == Import
import './profilFriendlyUser.scss';
import ModalSuppression from 'src/containers/ModalSuppression';


// == Composant
const ProfilFiendlyUser = ({
  canEditProfil,
  isEditable,
  firstname,
  lastname,
  department,
  email,
  cancelEdit,
  departmentsList,
  submitEdit,
  editField,
  editEmail,
  editPassword,
  editConfirmationPassword,
  isEdited,
  urlAvatar,
  isOpen,
  openSuccessMessage,
  closeSuccessMessage,
  errorPasswordMessage,
}) => {
  const userAvatar = urlAvatar;
  // handle on click who give at the user the possibility to edit his data
  const handleClick = () => {
    canEditProfil();
  };
  // handle on click for cancel the edit
  const handleCancelClick = () => {
    cancelEdit();
  };
  // handle change on field to set new value in state
  const handleChange = (evt) => {
    // console.log(`${evt.target.value} + ${evt.target.name}`);
    editField(evt.target.value, evt.target.name);
  };
  // handle for submit the modification 
  const handleSubmit = (evt) => {
    // console.log('coucou je suis le submit de edit profil');
    evt.preventDefault();
    submitEdit();
    openSuccessMessage();
    // cancelEdit();
  };
  // handle on close success message who set isOpen at false in state
  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMessage();
  };
  // Function for the successMessage
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <div className="profilfu">
      <div className="profil_fu_desciption">
        Voici votre espace personnel il vous sera utile si
        vous voulez effectuer des changements d'informations
      </div>
      <div className="profil_fu_friendlyUser">
        <div>
          {userAvatar && <img className="profil_fu_card_img" alt="Remy Sharp" src={urlAvatar} /> }
          {!userAvatar && <Avatar className="profil_fu_card_img" alt="Remy Sharp" />}
          <div className="profil_fu_card_img_upload">
            {isEditable && <UploadImg urlAvatar={urlAvatar} />}
          </div>
        </div>
        <div className="profil_information">
          <form onSubmit={handleSubmit} className="profil_form">
            <div className="form_fu_element">
              <TextField
                className="profil_input"
                id="outlined-name-input"
                value={firstname}
                type="text"
                autoComplete="current-name"
                variant="outlined"
                disabled
              />
            </div>
            <div className="form_fu_element">
              <TextField
                className="profil_input"
                id="outlined-firstname-input"
                value={lastname}
                type="text"
                autoComplete="current-firstname"
                variant="outlined"
                disabled
              />
            </div>
            {isEditable && (
              <div className="form_fu_element">
                <TextField className="profil_input" id="select" onChange={handleChange} label="Departement" name="department" select>
                  {departmentsList.map((depart) => (
                    <MenuItem value={depart.id}>{depart.name}</MenuItem>
                  ))}
                </TextField>
              </div>
            )}
            {!isEditable && (
              <div className="form_fu_element">
                <TextField className="profil_input" id="select" label="Departement" value="" select disabled>
                  <MenuItem value={department.id}>{department.name}</MenuItem>
                </TextField>
              </div>
            )}
            {isEditable && (
              <div className="form_fu_element">
                <Form.Input
                  className="input"
                  label="Email*"
                  type="email"
                  onChange={handleChange}
                  value={editEmail}
                  name="editEmail"
                  placeholder={email}
                  patern="/^[-._a-z0-9]+@[-._a-z0-9]+$/"
                  title="Le format de l'adresse mail est incorrecte"
                />
              </div>
            )}
            {!isEditable && (
              <div className="form_fu_element">
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
              <div className="form_fu_element">
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
              <div className="form_fu_element">
                <Form.Input
                  className="input"
                  label="Mot de passe*"
                  value={editPassword}
                  type="password"
                  onChange={handleChange}
                  name="editPassword"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-.]).{8,100}$"
                  title="Votre mot de passe doit contenir au moins : huit caracteres dont une minuscule, une majuscule, un chiffre et un caractere special (ex:=$?!.;/@...)"
                />
              </div>
            )}
            {isEditable && (
              <div className="form_fu_element">
                <Form.Input
                  className="input"
                  label="Mot de passe*"
                  type="password"
                  value={editConfirmationPassword}
                  onChange={handleChange}
                  name="editConfirmationPassword"
                />
              </div>
            )}
            {isEdited && (
              <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleMessageClose}>
                <Alert onClose={handleMessageClose} severity="success">
                  vos modifications ont bien été pris en compte ! vous souhaitez retourner sur la <a href="/profil">page d'accueil</a> ?
                </Alert>
              </Snackbar>
            )}
            {errorPasswordMessage && (
              <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleMessageClose}>
                <Alert onClose={handleMessageClose} severity="error">
                  Votre mot de passe doit contenir 8 character minimum, une majuscule, une minuscule et un character spécial
                </Alert>
              </Snackbar>
            )}
            {editPassword !== editConfirmationPassword ? (
              <>
                <div className="error_message_passwordConfirmation"><i className="times circle icon"/>Le champ "mot de passe" est différent du champ "confirmation"</div>
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
                    <Button onClick={handleCancelClick} style={{ backgroundColor: '#ff385c', color: '#FFFF' }} className="profil_btn" variant="contained" color="alerte"> Annuler</Button>
                  )}
                  {!isEditable && (
                    <Button onClick={handleClick} className="profil_btn" variant="contained" color="primary">
                      Modifier
                    </Button>
                  )}
                  {isEditable && (
                    <Button type="submit" className="profil_btn" variant="contained" color="primary">
                      Valider
                    </Button>
                  )}
                </div>
              </>
            )}
          </form>
          <ModalSuppression />
        </div>
      </div>
    </div>

  );
};

ProfilFiendlyUser.propTypes = {
  /** func with params */
  editField: PropTypes.func.isRequired,
  /** func without param */
  canEditProfil: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
  openSuccessMessage: PropTypes.func.isRequired,
  closeSuccessMessage: PropTypes.func.isRequired,
  /** string */
  editEmail: PropTypes.string.isRequired,
  editPassword: PropTypes.string.isRequired,
  editConfirmationPassword: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  urlAvatar: PropTypes.string.isRequired,
  /** bool */
  isEdited: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  /** array  */
  departmentsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

};
// == Export
export default ProfilFiendlyUser;
