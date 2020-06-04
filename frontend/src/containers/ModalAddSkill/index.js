import { connect } from 'react-redux';
import { getNewSkillValue, getJobWorkerSkill, submitNewSkill } from 'src/action/usersActions';
import ModalAddSkill from 'src/components/ModalAddSkill/';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

  serviceList: state.service.serviceList,
  currentJobWorkerSkills: state.user.currentJobWorkerSkills,
  selectedSkillId: state.user.selectedSkill,
  selectedSkillPrice: state.user.selectedSkillPrice,
  selectedSkillDescription: state.user.selectedSkillDescription,

  // roles: state.user.userData.roles[0],
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getJobWorkerSkill: () => {
    dispatch(getJobWorkerSkill());
  },
  getNewSkillValue: (skillValue, nameInput) => {
    dispatch(getNewSkillValue(skillValue, nameInput));
  },
  submitNewSkill: () => {
    dispatch(submitNewSkill());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddSkill);
