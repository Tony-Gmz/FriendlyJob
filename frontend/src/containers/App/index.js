import { connect } from 'react-redux';
import { getToken } from 'src/action/usersActions';
import { getServices } from 'src/action/servicesActions';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getToken: () => {
    dispatch(getToken());
  },
  getServices: () => {
    dispatch(getServices());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
