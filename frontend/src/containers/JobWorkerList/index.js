import { connect } from 'react-redux';
import JobWorkerList from 'src/components/JobWorkerList';
import { getJobWorker, changeCurrentPage } from 'src/action/usersActions';
import { getServiceName } from 'src/action/servicesActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  jobWorkers: state.user.jobWorkers,
  currentService: state.service.serviceName,
  loadingOnJobWorkerList: state.user.loadingOnJobWorkerList,
  currentPage: state.user.currentPage,
  joberPerPage: state.user.joberPerPage,

});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getJobWorker: () => {
    dispatch(getJobWorker());
  },
  getServiceName: (serviceName) => {
    dispatch(getServiceName(serviceName));
  },
  changeCurrentPage: (newCurrentPage) => {
    dispatch(changeCurrentPage(newCurrentPage));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobWorkerList);
