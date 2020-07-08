import { connect } from 'react-redux';
import { changeField, submitLoggin, checkUserConfirmed, closeErrorMessage, closeSuccesMessage, closeErrorConfirmedMessage, closeErrorConnexionMessage } from 'src/action/usersActions';
import { getRequest } from 'src/action/requestAction';
import ModalConnexion from 'src/components/ModalConnexion';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  connexionError: state.user.connexionError,
  isLogged: state.user.isLogged,
  isConfirmed: state.user.isConfirmed,
  errorConfirmedMessage: state.user.errorConfirmedMessage,
  errorMessage: state.user.errorMessage,
  isOpen: state.user.isOpen,
  errorConnexionMessage: state.user.errorConnexionMessage,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  changeField: (newValue, inputName) => {
    dispatch(changeField(newValue, inputName));
  },
  submitLoggin: () => {
    dispatch(submitLoggin());
  },
  getRequest: () => {
    dispatch(getRequest());
  },
  checkUserConfirmed: () => {
    dispatch(checkUserConfirmed());
  },
  closeErrorMessage: () => {
    dispatch(closeErrorMessage());
  },
  closeSuccessMessage: () => {
    dispatch(closeSuccesMessage());
  },
  closeErrorConfirmedMessage: () => {
    dispatch(closeErrorConfirmedMessage());
  },
  closeErrorConnexionMessage: () => {
    dispatch(closeErrorConnexionMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalConnexion);
