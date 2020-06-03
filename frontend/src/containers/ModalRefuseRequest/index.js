import { connect } from 'react-redux';
import { getCommentId, submitRefuseRequest } from 'src/action/requestAction';
import ModalRefuseRequest from 'src/components/ModalRefuseRequest';

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

  submitRefuseRequest: () => {
    dispatch(submitRefuseRequest());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalRefuseRequest);
