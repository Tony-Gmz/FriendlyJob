import { connect } from 'react-redux';
import {
  changeFieldComment,
  submitComment,
  changeRatingComment,
  getCommentId,
} from '../../action/requestAction';
import ModalComment from '../../components/ModalComment';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  commentId: state.request.commentId,
  commentBody: state.request.commentBody,
  commentRate: state.request.commentRate,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getCommentId: (commentId) => {
    dispatch(getCommentId(commentId));
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
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalComment);
