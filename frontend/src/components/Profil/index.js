import React from 'react';
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
  departments,
}) => {
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
            departments={departments}
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
            departments={departments}
          />
        )}
    </>
  );
};

Profil.propTypes = {
  /** func with params */
  editFieldValue: PropTypes.func.isRequired,
  /** array  */
  userData: PropTypes.object.isRequired,
  departmentsList: PropTypes.array.isRequired,
  currentJobWorkerSkills: PropTypes.array.isRequired,
  serviceList: PropTypes.array.isRequired,
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
  urlAvatar: PropTypes.string.isRequired,
  /** bool */
  isEdited: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  errorMessage: PropTypes.bool.isRequired,
  /** number */
  departments: PropTypes.number,
};
export default Profil;
