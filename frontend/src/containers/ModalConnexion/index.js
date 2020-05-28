import { connect } from 'react-redux';
import { changeField, submitLoggin } from 'src/action/usersActions';
import ModalConnexion from 'src/components/ModalConnexion';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalConnexion);
