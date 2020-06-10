import { connect } from 'react-redux';
import Request from 'src/components/Request';
import { getRequest, submitRefuseRequest, submitAccepteRequest, getCommentId, submitDeleteRequest } from 'src/action/requestAction';
import { getUserData } from 'src/action/usersActions';
import { submitFinishRequest } from '../../action/requestAction';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  commentId: state.request.commentId,
  userData: state.user.userData,
  requestList: state.request.requestList,
  toggle: state.request.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getCommentId: (commentId) => {
    dispatch(getCommentId(commentId));
  },

  getRequest: () => {
    dispatch(getRequest());
  },
  getUserData: () => {
    dispatch(getUserData());
  },

  submitRefuseRequest: () => {
    dispatch(submitRefuseRequest());
  },

  submitAccepteRequest: () => {
    dispatch(submitAccepteRequest());
  },

  submitDeleteRequest: () => {
    dispatch(submitDeleteRequest());
  },

  submitFinishRequest: () => {
    dispatch(submitFinishRequest());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Request);
