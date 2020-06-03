import { connect } from 'react-redux';
import ModalSuppression from '../../components/ModalSuppression';
import { submitDelete } from '../../action/usersActions';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  isDelete: state.user.isDelete,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  submitDelete: () => {
    dispatch(submitDelete());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalSuppression);
