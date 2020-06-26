import { FIELD_VALUE, IS_SUBSCRIBE } from "../action/inscriptionAction";

const initialState = {
  // Initial State
  /** List of service */
  nom: '',
  prenom: '',
  departement: null,
  email: '',
  roles: '',
  password: '',
  isSubscribe: false,
};

const inscriptionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FIELD_VALUE:
      return {
        ...state,
        [action.inputName]: action.newValue,
      };
    case IS_SUBSCRIBE:
      return {
        ...state,
        isSubscribe: true,
      };
    default: return state;
  }
};

export default inscriptionReducer;
