import { connect } from 'react-redux';
import { fieldValue, submitSubscribe } from 'src/action/inscriptionAction';
import ModalInscription from 'src/components/ModalInscription';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  isSubscribe: state.inscription.isSubscribe,
  selectValue: state.inscription.departement,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalInscription);
