import React from 'react';
import PropTypes from 'prop-types';
import ProfilFriendlyUser from './ProfilFriendlyUser';
import ProfilWorkJober from './ProfilWorkJober';

const Profil = ({ userData, editFieldValue, departmentsList, canEditProfil, cancelEdit, submitEdit, isEditable, editEmail, editPassword, editConfirmationPassword, edit, editAbout }) => {
  const role = localStorage.getItem('userRole');
  return (
    <>
      {role === 'FRIENDLY_USER' ? <ProfilFriendlyUser departmentsList={departmentsList} editField={editFieldValue} {...userData} canEditProfil={canEditProfil} cancelEdit={cancelEdit} submitEdit={submitEdit} isEditable={isEditable} editEmail={editEmail} editPassword={editPassword} editConfirmationPassword={editConfirmationPassword} edit={edit} editAbout={editAbout} /> : <ProfilWorkJober {...userData} /> }
    </>
  );

};

export default Profil;
