import { connect } from 'react-redux';
import JobWorkerDetail from 'src/components/JobWorkerDetail';
import { getJobWorkerDetail, getJobWorkerId, getJobWorkerRating } from 'src/action/usersActions';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  isLogged: state.user.isLogged,
  loadingOnJobWorkerDetail: state.user.loadingOnJobWorkerDetail,
  currentJobWorkerDetail: state.user.currentJobWorkerDetail,
  currentJobWorkerRating: state.user.currentJobWorkerRating,
  // roles: state.user.userData.roles[0],
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getJobWorkerId: (jobWorkerId) => {
    dispatch(getJobWorkerId(jobWorkerId));
  },
  getJobWorkerDetail: () => {
    dispatch(getJobWorkerDetail());
  },
  getJobWorkerRating: () => {
    dispatch(getJobWorkerRating());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobWorkerDetail);
