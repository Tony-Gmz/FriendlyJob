import { connect } from 'react-redux';
import { getSkillId, submitDeleteSkill } from 'src/action/usersActions';

import ModalDeleteSkill from 'src/components/ModalDeleteSkill';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getSkillId: (id) => {
    dispatch(getSkillId(id));
  },
  submitDeleteSkill: () => {
    dispatch(submitDeleteSkill());
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalDeleteSkill);
