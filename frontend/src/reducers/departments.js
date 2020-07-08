import { SAVE_DEPARTMENTS } from '../action/departmentsActions';

const initialState = {
  // Initial State
  /** List of service */
  departmentsList: [],
};

const departmentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DEPARTMENTS:
      return {
        ...state,
        departmentsList: action.departments,
      };
    default: return state;
  }
};

export default departmentsReducer;
