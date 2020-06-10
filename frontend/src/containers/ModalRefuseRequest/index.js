import { connect } from 'react-redux';
import { getCommentId, submitRefuseRequest, clearRefuse } from 'src/action/requestAction';
import ModalRefuseRequest from 'src/components/ModalRefuseRequest';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  commentId: state.request.commentId,
  isRefuse: state.request.isRefuse,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getCommentId: (commentId) => {
    dispatch(getCommentId(commentId));
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
