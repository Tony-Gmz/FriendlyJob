import {
  SAVE_USER_CONFIRMED,
  SAVE_RANDOM_JOBWORKER,
  CHANGE_FIELD, SAVE_USER,
  SAVE_SIX_RANDOM_JOBWORKER,
  SAVE_JOBWORKER,
  GET_JOBWORKER_ID,
  SAVE_JOBWORKER_DETAIL,
  SAVE_JOBWORKER_RATING,
  CAN_EDIT_PROFIL,
  CANCEL_EDIT,
  EDIT_FIELD_VALUE,
  SAVE_EDIT,
  DELETE_ACCOUNT,
  SAVE_JOBWORKER_SKILLS,
  GET_NEW_SKILL_VALUE,
  LOG_OUT,
  GET_SKILL_ID,
  SAVE_URL_AVATAR,
  GET_URL_AVATAR,
  IS_SKILL_SAVE,
  CLEAR_SAVE,
  SAVE_ERROR_CONNEXION,
  SAVE_JOBWORKER_SERVICE,
  CHANGE_CURRENT_PAGE,
  OPEN_SUCCESS_MESSAGE,
  CLOSE_SUCCESS_MESSAGE,
  ERROR_PASSWORD_MESSAGE,
  CLOSE_ERROR_MESSAGE,
  CLOSE_ERROR_CONFIRMED_MESSAGE,
  CLOSE_ERROR_CONNEXION_MESSAGE,
} from '../action/usersActions';

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
  /** Loading for jobWorker profil */
  loadingOnJobWorkerProfil: true,
  loadingOnModalAddSkill: true,
  /** Jobworkers List */
  jobWorkers: [],
  /** Current Jobworker Detail */
  currentJobWorkerDetail: [],
  /** Current JobWorker Rating for details */
  currentJobWorkerRating: [],
  /** current jobWorker Skills for edit */
  currentJobWorkerSkills: [],
  /** bool for edit */
  isEditable: false,
  /** data for edit */
  editEmail: null,
  editPassword: null,
  editDepartment: null,
  editAbout: null,
  editConfirmationPassword: null,
  /** bool for edit */
  isEdited: false,
  /** bool for delete */
  isDelete: false,
  /** Selected Skill id in jobWorker Profil */
  selectedSkillId: null,
  /** Selected skill Pric in JobWoker Profil */
  selectedSkillPrice: null,
  /** Selected Skill Description in jobWorker Profil */
  selectedSkillDescription: null,
  /** id of the currentSkill for the ModalDeleteSkill */
  skillId: null,
  /** url of the picture who send by the user in his profil, we send this url in DB */
  urlAvatar: '',
  /** file send for picture in user's profil */
  avatarData: null,
  /** bool for the user's profil */
  isSave: false,
  /** error when the user try to connect in app  */
  connexionError: null,
  /** List of service for the current jobworker's modal add Skill in his profil */
  jobWorkerService: [],
  currentPage: 1,
  joberPerPage: 8,
  isOpen: false,
  errorMessage: false,
  isConfirmed: '',
  errorConfirmedMessage: true,
  errorConnexionMessage: true,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case SAVE_USER_CONFIRMED:
      return {
        ...state,
        isConfirmed: action.newState,
      };
    case SAVE_RANDOM_JOBWORKER:
      return {
        ...state,
        randomJobWorker: action.newRandomJobWorker,
        loading: false,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.newCurrentPage,
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
        loadingOnServiceDetail: false,
      };
    case SAVE_JOBWORKER:
      return {
        ...state,
        jobWorkers: action.newJobWorker,
        loadingOnJobWorkerList: false,
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
        loadingOnJobWorkerDetail: false,
      };
    case SAVE_JOBWORKER_RATING:
      return {
        ...state,
        currentJobWorkerRating: action.rating,
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
        isEdited: true,
        isEditable: false,

      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        isDelete: true,
        isLogged: false,
      };
    case SAVE_JOBWORKER_SKILLS:
      return {
        ...state,
        currentJobWorkerSkills: action.skills,
        loadingOnJobWorkerProfil: false,
      };
    case GET_NEW_SKILL_VALUE:
      return {
        ...state,
        [action.nameInput]: action.skillValue,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
      };
    case GET_SKILL_ID:
      return {
        ...state,
        skillId: action.id,
      };
    case SAVE_URL_AVATAR:
      return {
        ...state,
        urlAvatar: action.avatar,
      };
    case GET_URL_AVATAR:
      return {
        ...state,
        avatarData: action.newAvatar,
      };
    case IS_SKILL_SAVE:
      return {
        ...state,
        isSave: true,
      };
    case CLEAR_SAVE:
      return {
        ...state,
        isSave: false,
      };
    case SAVE_ERROR_CONNEXION:
      return {
        ...state,
        connexionError: true,
      };
    case SAVE_JOBWORKER_SERVICE:
      return {
        ...state,
        jobWorkerService: action.service,
        loadingOnModalAddSkill: false,
      };
    case OPEN_SUCCESS_MESSAGE:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_SUCCESS_MESSAGE:
      return {
        ...state,
        isOpen: false,
      };
    case ERROR_PASSWORD_MESSAGE:
      return {
        ...state,
        errorMessage: true,
      };
    case CLOSE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: false,
      };
    case CLOSE_ERROR_CONFIRMED_MESSAGE:
      return {
        ...state,
        errorConfirmedMessage: false,
      };
    case CLOSE_ERROR_CONNEXION_MESSAGE:
      return {
        ...state,
        errorConnexionMessage: false,
      };
    default: return state;
  }
};

export default userReducer;
