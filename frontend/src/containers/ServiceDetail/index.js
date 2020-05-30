import { connect } from 'react-redux';
import ServiceDetail from 'src/components/ServiceDetail';
import { getSixJobWorker } from 'src/action/usersActions';
import { getServiceId } from 'src/action/servicesActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  serviceList: state.service.serviceList,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getSixJobWorker: () => {
    dispatch(getSixJobWorker());
  },
  getServiceId: (serviceId) => {
    dispatch(getServiceId(serviceId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceDetail);
