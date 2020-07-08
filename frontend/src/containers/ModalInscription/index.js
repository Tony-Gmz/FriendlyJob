import { connect } from 'react-redux';
import { fieldValue, submitSubscribe, closeErrorMessageInscription } from 'src/action/inscriptionAction';
import ModalInscription from 'src/components/ModalInscription';
import {  openSuccesMessage, closeSuccesMessage } from '../../action/usersActions';
import { getAllDepartments } from 'src/action/departmentsActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  isSubscribe: state.inscription.isSubscribe,
  selectValue: state.inscription.departement,
  departmentsList: state.departments.departmentsList,
  errorPasswordMessage: state.user.errorPasswordMessage,
  isOpen: state.user.isOpen,
  password: state.inscription.password,
  confirmPassword: state.inscription.confirmPassword,
  errorInscriptionMessage: state.inscription.errorInscriptionMessage,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  fieldValue: (newValue, inputName) => {
    dispatch(fieldValue(newValue, inputName));
  },
  submitSubscribe: () => {
    dispatch(submitSubscribe());
  },
  closeErrorMessageInscription: () => {
    dispatch(closeErrorMessageInscription());
  },
  getAllDepartments: () => {
    dispatch(getAllDepartments());
  },
  openSuccessMessage: () => {
    dispatch(openSuccesMessage());
  },
  closeSuccessMessage: () => {
    dispatch(closeSuccesMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalInscription);
