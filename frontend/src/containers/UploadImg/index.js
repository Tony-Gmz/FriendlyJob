import { connect } from 'react-redux';
import { getUrlAvatar, submitAvatar } from 'src/action/usersActions';
import UploadImg from 'src/components/Profil/UploadImg';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getUrlAvatar: (newAvatar) => {
    dispatch(getUrlAvatar(newAvatar));
  },
  submitAvatar: () => {
    dispatch(submitAvatar());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadImg);
