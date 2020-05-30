import { connect } from 'react-redux';
import JobWorkerList from 'src/components/JobWorkerList';
import { getJobWorker } from 'src/action/usersActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  jobWorkers: state.user.jobWorkers,
  currentService: state.service.serviceName,
  loadingOnJobWorkerList: state.user.loadingOnJobWorkerList,

});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getJobWorker: () => {
    dispatch(getJobWorker());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobWorkerList);
