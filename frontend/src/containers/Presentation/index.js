import { connect } from 'react-redux';
import Presentation from 'src/components/HomePage/Presentation';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  serviceList: state.service.serviceList,
  // roles: state.user.userData.roles[0],
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presentation);
