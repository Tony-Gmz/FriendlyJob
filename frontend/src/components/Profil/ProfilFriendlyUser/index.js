// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import profil from 'src/assets/img/screenshot.png';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { whitoutAvatar } from 'src/utils';
import UploadImg from 'src/containers/UploadImg';

// == Import
import './profilFriendlyUser.scss';
import ModalSuppression from 'src/containers/ModalSuppression';
import { Link } from 'react-router-dom';

// == Composant
const ProfilFiendlyUser = ({
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
  urlAvatar,
}) => {
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
  const handleSubmit = (evt) => {
    console.log('coucou je suis le submit de edit profil');
    evt.preventDefault();
    submitEdit();
  };
  return (
    <div className="profilFiendlyUser">
      <div className="profilFiendlyUser_desciption">
        Voici votre espace personnel il vous sera utile si vous voulez effectuer des changements d'informations
      </div>
      <div className="profil">
        <div className="profil_card_img">
          {userAvatar && <Avatar alt="Remy Sharp" src={urlAvatar} /> }
          {!userAvatar && <Avatar alt="Remy Sharp" src="">{whitoutAvatar(firstname)}</Avatar>}
          <div className="profil_card_img_upload">
            {isEditable && <UploadImg urlAvatar={urlAvatar} />}
          </div>
        </div>
        <div className="profil_information">
          <form onSubmit={handleSubmit} className="profil_form">
            <div className="form_element">
              <TextField
                className="profil_input"
                id="outlined-name-input"
                label='Nom'
                value={firstname}
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
                value={lastname}
                type="text"
                autoComplete="current-firstname"
                variant="outlined"
                disabled
              />
            </div>
            {isEditable && (
              <div className="form_element">
                <TextField className="profil_input" id="select" onChange={handleChange} label="Departement" name="department" value="" select>
                  {departmentsList.map((depart) => (
                    <MenuItem value={depart.id}>{depart.name}</MenuItem>
                  ))}
                </TextField>
              </div>
            )}
            {!isEditable && (
              <div className="form_element">
                <TextField className="profil_input" id="select" label="Departement" value="" select disabled>
                  <MenuItem value={department.id}>{department.name}</MenuItem>
                </TextField>
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
                <Link to="/"><Button onClick={handleCancelClick} className="profil_btn" variant="contained" color="alert"> Annuler</Button></Link>
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
export default ProfilFiendlyUser;
