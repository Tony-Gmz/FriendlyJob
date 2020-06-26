import { connect } from 'react-redux';
import { getRequestId, submitCancelRequest } from '../../action/requestAction';
import ModalCancelRequest from '../../components/ModalCancelRequest';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  requestId: state.request.requestId,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getRequestId: (requestId) => {
    dispatch(getRequestId(requestId));
  },

  submitCancelRequest: () => {
    dispatch(submitCancelRequest());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalCancelRequest);
