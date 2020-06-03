import {
  SAVE_RANDOM_JOBWORKER,
  CHANGE_FIELD, SAVE_USER,
  SAVE_SIX_RANDOM_JOBWORKER,
  HIDE_LOADER,
  SAVE_JOBWORKER,
  GET_JOBWORKER_ID,
  SAVE_JOBWORKER_DETAIL,
  SAVE_JOBWORKER_RATING,
  SET_SORT_PARAMS,
  SORT_BY_ALPHABET,
  SORT_BY_PRICE,
  FILTER_BY_PRICE,
  LOAD_DATA,
} from "../action/usersActions";

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
  currentJobWorkerId: null,
  randomJobWorker: null,
  loading: true,
  loadingOnServiceDetail: true,
  loadingOnJobWorkerList: true,
  loadingOnJobWorkerDetail: true,
  jobWorkers: [],
  currentJobWorkerDetail: [],
  currentJobWorkerRating: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RANDOM_JOBWORKER:
      return {
        ...state,
        randomJobWorker: action.newRandomJobWorker,
        loading: false,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.inputName]: action.newValue,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        userData: action.info,
      };
    case SAVE_SIX_RANDOM_JOBWORKER:
      return {
        ...state,
        jobWorkers: action.sixJobWorker,
      };

    case HIDE_LOADER:
      return {
        ...state,
        loadingOnServiceDetail: false,
      };
    case SAVE_JOBWORKER:
      return {
        ...state,
        loadingOnJobWorkerList: false,
        jobWorkers: action.newJobWorker,
      };
    case GET_JOBWORKER_ID:
      return {
        ...state,
        currentJobWorkerId: action.jobWorkerId,
      };
    case SAVE_JOBWORKER_DETAIL:
      return {
        ...state,
        currentJobWorkerDetail: action.detail,
      };
    case SAVE_JOBWORKER_RATING:
      return {
        ...state,
        currentJobWorkerRating: action.rating,
        loadingOnJobWorkerDetail: false,
      };

    case SORT_BY_ALPHABET:
      // sort alphabetically
      return state;

    case SORT_BY_PRICE:
      // sort by price
      return state;

    case FILTER_BY_PRICE:
      // filter by price
      return state;


    default: return state;
  }
};

export default userReducer;
