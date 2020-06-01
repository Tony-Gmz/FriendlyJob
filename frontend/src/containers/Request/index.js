import { connect } from 'react-redux';
import Request from 'src/components/Request';
import { getRequest } from 'src/action/requestAction';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  requestList: state.request.requestList,

});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getRequest: () => {
    dispatch(getRequest());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Request);
