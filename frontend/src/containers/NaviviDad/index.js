import { connect } from 'react-redux';
import NaviviDad from 'src/components/NaviviDad';
import { logOut } from '../../action/usersActions';
import { isNavbarOpen } from '../../action/navbarAction';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  isLogged: state.user.isLogged,
  // roles: state.user.userData.roles[0],
  isOpen: state.navbar.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  isNavbarOpen: (openValue) => {
    dispatch(isNavbarOpen(openValue));
  },
  logOut: () => {
    dispatch(logOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NaviviDad);
