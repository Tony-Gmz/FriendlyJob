import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfilFriendlyUser from './ProfilFriendlyUser';
import ProfilWorkJober from './ProfilWorkJober';

const Profil = ({
  userData,
  editFieldValue,
  departmentsList,
  canEditProfil,
  cancelEdit,
  submitEdit,
  isEditable,
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
  editDepartment,
  isOpen,
  closeSuccessMessage,
  openSuccessMessage,
  errorMessage,
  closeErrorMessage,
}) => {

  /* useEffect(() => {
    getUserData();
  }, [userData]); */


  const role = localStorage.getItem('userRole');
  return (
    <>
      {role === 'FRIENDLY_USER'
        ? (
          <ProfilFriendlyUser
            departmentsList={departmentsList}
            editField={editFieldValue}
            {...userData}
            canEditProfil={canEditProfil}
            cancelEdit={cancelEdit}
            submitEdit={submitEdit}
            isEditable={isEditable}
            editEmail={editEmail}
            editPassword={editPassword}
            editConfirmationPassword={editConfirmationPassword}
            isEdited={isEdited}
            editAbout={editAbout}
            urlAvatar={urlAvatar}
            editDepartment={editDepartment}
            isOpen={isOpen}
            openSuccessMessage={openSuccessMessage}
            closeSuccessMessage={closeSuccessMessage}
            errorMessage={errorMessage}
            closeErrorMessage={closeErrorMessage}
          />
        )
        : (
          <ProfilWorkJober
            toggle={toggle}
            {...userData}
            departmentsList={departmentsList}
            editField={editFieldValue}
            {...userData}
            canEditProfil={canEditProfil}
            cancelEdit={cancelEdit}
            submitEdit={submitEdit}
            isEditable={isEditable}
            editEmail={editEmail}
            editPassword={editPassword}
            editConfirmationPassword={editConfirmationPassword}
            isEdited={isEdited}
            editAbout={editAbout}
            getJobWorkerSkill={getJobWorkerSkill}
            serviceList={serviceList}
            currentJobWorkerSkills={currentJobWorkerSkills}
            urlAvatar={urlAvatar}
            editDepartment={editDepartment}
            isOpen={isOpen}
            openSuccessMessage={openSuccessMessage}
            closeSuccessMessage={closeSuccessMessage}
            errorMessage={errorMessage}
            closeErrorMessage={closeErrorMessage}
          />
        )}
    </>
  );
};

Profil.propTypes = {
  /** func with params */
  editFieldValue: PropTypes.func.isRequired,
  /** array  */
  userData: PropTypes.array.isRequired,
  departmentsList: PropTypes.array.isRequired,
  currentJobWorkerSkills: PropTypes.array.isRequired,
  serviceList: PropTypes.array.isRequired,
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
  /** bool */
  isEdited: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
};
export default Profil;
