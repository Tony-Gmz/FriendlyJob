import { connect } from 'react-redux';
import Request from 'src/components/Request';
import { getRequest, submitRefuseRequest, submitAccepteRequest, getCommentId, submitDeleteRequest, requestSortSelected } from 'src/action/requestAction';
import { getUserData } from 'src/action/usersActions';
import { submitFinishRequest, getRequestSelectedName, resetRequestSelected } from '../../action/requestAction';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  commentId: state.request.commentId,
  userData: state.user.userData,
  requestList: state.request.requestList,
  toggle: state.request.toggle,
  requestSelected: state.request.requestSelected,
  requestSelectedName: state.request.requestSelectedName,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getCommentId: (commentId) => {
    dispatch(getCommentId(commentId));
  },
  requestSortSelected: (newSort) => {
    dispatch(requestSortSelected(newSort));
  },
  resetRequestSelected: () => {
    dispatch(resetRequestSelected());
  },
  getRequestSelectedName: (newName) => {
    dispatch(getRequestSelectedName(newName));
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
