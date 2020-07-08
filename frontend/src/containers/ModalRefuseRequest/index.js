import { connect } from 'react-redux';
import { getRequestId, submitRefuseRequest, clearRefuse } from 'src/action/requestAction';
import ModalRefuseRequest from 'src/components/ModalRefuseRequest';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  requestId: state.request.requestId,
  isRefuse: state.request.isRefuse,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getRequestId: (requestId) => {
    dispatch(getRequestId(requestId));
  },

  submitRefuseRequest: () => {
    dispatch(submitRefuseRequest());
  },
  clearRefuse: () => {
    dispatch(clearRefuse());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalRefuseRequest);
