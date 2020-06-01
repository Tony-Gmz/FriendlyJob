import { connect } from 'react-redux';
import Request from 'src/components/Request';
import { getRequest } from 'src/action/requestAction';
import { getUserData } from 'src/action/usersActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  userData: state.user.userData,
  requestList: state.request.requestList,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getRequest: () => {
    dispatch(getRequest());
  },
  getUserData: () => {
    dispatch(getUserData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Request);
