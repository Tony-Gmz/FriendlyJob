import { connect } from 'react-redux';
import {
  changeFieldComment,
  submitComment,
  changeRatingComment,
  getRequestId,
  clearSave,
} from '../../action/requestAction';
import ModalComment from '../../components/ModalComment';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  requestId: state.request.requestId,
  commentBody: state.request.commentBody,
  commentRate: state.request.commentRate,
  isSend: state.request.isSend,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getRequestId: (requestId) => {
    dispatch(getRequestId(requestId));
  },

  changeFieldComment: (newValue, inputName) => {
    dispatch(changeFieldComment(newValue, inputName));
  },
  submitComment: () => {
    dispatch(submitComment());
  },

  changeRatingComment: (newRate) => {
    dispatch(changeRatingComment(newRate));
  },
  clearSave: () => {
    dispatch(clearSave());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalComment);
