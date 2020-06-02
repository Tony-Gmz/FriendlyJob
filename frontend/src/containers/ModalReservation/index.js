import { connect } from 'react-redux';
import { changeFieldRequest, submitRequest } from 'src/action/requestAction';
import ModalReservation from '../../components/ModalReservation';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  currentJobWorkerDetail: state.user.currentJobWorkerDetail,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  changeFieldRequest: (newValue, inputName) => {
    dispatch(changeFieldRequest(newValue, inputName));
  },
  submitRequest: () => {
    dispatch(submitRequest());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalReservation);
