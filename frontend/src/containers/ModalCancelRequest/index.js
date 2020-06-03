import { connect } from 'react-redux';
import { getCommentId, submitCancelRequest } from '../../action/requestAction';
import ModalCancelRequest from '../../components/ModalCancelRequest';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  commentId: state.request.commentId,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getCommentId: (commentId) => {
    dispatch(getCommentId(commentId));
  },

  submitCancelRequest: () => {
    dispatch(submitCancelRequest());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalCancelRequest);
