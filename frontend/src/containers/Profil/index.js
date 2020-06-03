import { connect } from 'react-redux';
import { canEditProfil, cancelEdit, editFieldValue, submitEdit } from 'src/action/usersActions';
import Profil from 'src/components/Profil/';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

  userData: state.user.userData,
  departmentsList: state.departments.departmentsList,
  isEditable: state.user.isEditable,
  editEmail: state.user.editEmail,
  editPassword: state.user.editPassword,
  editConfirmationPassword: state.user.editConfirmationPassword,
  edit: state.user.edit,
  editAbout: state.user.editAbout,
  // roles: state.user.userData.roles[0],
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  editFieldValue: (value, name) => {
    dispatch(editFieldValue(value, name));
  },
  canEditProfil: () => {
    dispatch(canEditProfil());
  },
  cancelEdit: () => {
    dispatch(cancelEdit());
  },
  submitEdit: () => {
    dispatch(submitEdit());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
