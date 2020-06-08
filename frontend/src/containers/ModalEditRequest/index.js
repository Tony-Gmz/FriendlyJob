import { connect } from 'react-redux';
import {
  changeFieldRequest,
  changeFieldHourRequest,
  changeFieldDateRequest,
  submitSetRequest,
  getCommentId,
} from '../../action/requestAction';
import ModalEditRequest from '../../components/ModalEditRequest';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  commentId: state.request.commentId,
  RequestBody: state.request.RequestBody,
  RequestDate: state.request.RequestDate,
  RequestHour: state.request.RequestHour,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getCommentId: (commentId) => {
    dispatch(getCommentId(commentId));
  },


  changeFieldRequest: (newValue, inputName) => {
    dispatch(changeFieldRequest(newValue, inputName));
  },
  submitSetRequest: () => {
    dispatch(submitSetRequest());
  },

  changeFieldHourRequest: (newRate) => {
    dispatch(changeFieldHourRequest(newRate));
  },
  changeFieldDateRequest: (newRate) => {
    dispatch(changeFieldDateRequest(newRate));
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalEditRequest);
