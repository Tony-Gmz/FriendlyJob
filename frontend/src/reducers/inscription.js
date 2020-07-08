import { FIELD_VALUE, IS_SUBSCRIBE, OPEN_ERROR_MESSAGE_INSCRIPTION, CLOSE_ERROR_MESSAGE_INSCRIPTION } from "../action/inscriptionAction";

const initialState = {
  // Initial State
  /** List of service */
  nom: '',
  prenom: '',
  departement: null,
  email: '',
  roles: '',
  password: '',
  confirmPassword: '',
  isSubscribe: false,
  errorInscriptionMessage: false,
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
    case OPEN_ERROR_MESSAGE_INSCRIPTION:
      return {
        ...state,
        errorInscriptionMessage: true,
      };
    case CLOSE_ERROR_MESSAGE_INSCRIPTION:
      return {
        ...state,
        errorInscriptionMessage: false,
      };
    default: return state;
  }
};

export default inscriptionReducer;
