import { connect } from 'react-redux';
import ServiceList from 'src/components/ServiceList';
import { getServices } from 'src/action/servicesActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  serviceList: state.service.serviceList,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getServices: () => {
    dispatch(getServices());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceList);
