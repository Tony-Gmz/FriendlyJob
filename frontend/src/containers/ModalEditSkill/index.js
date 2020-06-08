import { connect } from 'react-redux';
import { getNewSkillValue, submitEditSkill, getSkillId } from 'src/action/usersActions';
import ModalEditSkill from 'src/components/ModalEditSkill';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  selectedSkillPrice: state.user.selectedSkillPrice,
  selectedSkillDescription: state.user.selectedSkillDescription,
 
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // With dispatch we send the action in the reducer
  getNewSkillValue: (skillValue, nameInput) => {
    dispatch(getNewSkillValue(skillValue, nameInput));
  },
  submitEditSkill: () => {
    dispatch(submitEditSkill());
  },
  getSkillId: (id) => {
    dispatch(getSkillId(id));
  },
});


export default connect(

  mapStateToProps,
  mapDispatchToProps,

)(ModalEditSkill);
