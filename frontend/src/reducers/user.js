import {
  SAVE_RANDOM_JOBWORKER,
  CHANGE_FIELD, SAVE_USER,
  SAVE_SIX_RANDOM_JOBWORKER,
  HIDE_LOADER,
  SAVE_JOBWORKER,
  GET_JOBWORKER_ID,
  SAVE_JOBWORKER_DETAIL,
  SAVE_JOBWORKER_RATING,
  CAN_EDIT_PROFIL,
  CANCEL_EDIT,
  EDIT_FIELD_VALUE,
  SAVE_EDIT,
  DELETE_ACCOUNT,
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
  /** currentJobwokerId */
  currentJobWorkerId: null,
  /** RandomJobWoker Data for homePage */
  randomJobWorker: null,
  /** Loading HomePage */
  loading: true,
  /** Loading service detail */
  loadingOnServiceDetail: true,
  /** Loading for jobWorker List */
  loadingOnJobWorkerList: true,
  /** Loading for jobWorker Detail */
  loadingOnJobWorkerDetail: true,
  /** Jobworkers List */
  jobWorkers: [],
  /** Current Jobworker Detail */
  currentJobWorkerDetail: [],
  /** Current JobWorker Rating */
  currentJobWorkerRating: [],
  /** bool for edit */
  isEditable: false,
  /** data for edit */
  editEmail: null,
  editPassword: null,
  editDepartment: null,
  editAbout: null,
  editConfirmationPassword: null,
  /** bool for edit */
  edit: false,
  /** bool for delete */
  isDelete: false,
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
    case CAN_EDIT_PROFIL:
      return {
        ...state,
        isEditable: true,
      };

    case CANCEL_EDIT:
      return {
        ...state,
        isEditable: false,
      };
    case EDIT_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_EDIT:
      return {
        ...state,
        userData: action.userData,
        edit: true,
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        isDelete: true,
        isLogged: false,
      };
    default: return state;
  }
};

export default userReducer;
