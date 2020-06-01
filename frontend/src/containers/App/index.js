import { connect } from 'react-redux';
import { getRandomJobWorker, getUserData } from 'src/action/usersActions';
import { getServices } from 'src/action/servicesActions';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  loading: state.service.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getServices: () => {
    dispatch(getServices());
  },
  getRandomJobWorker: () => {
    dispatch(getRandomJobWorker());
  },
  getUserData: () => {
    dispatch(getUserData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
