import { SAVE_RANDOM_JOBWORKER } from "../action/usersActions";

const initialState = {
  // ici l'état initial
  /** contenu du champ e-mail */
  email: '',
  /** contenu du champ password */
  password: '',
  /** indique si l'utilisateur est loggué */
  isLogged: false,
  /** informations de l'utilisateur */
  userData: null,
  /** Token  */
  token: '',
  randomJobWorker: null,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RANDOM_JOBWORKER:
      return {
        ...state,
        randomJobWorker: action.newRandomJobWorker,
      };
    default: return state;
  }
};

export default userReducer;
