// Action de get the value of connexion modal
export const CHANGE_FIELD = 'CHANGE_FIELD';

// Action to send users informations to the API
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

// Action to save user data in the state
export const SAVE_USER = 'SAVE_USER';

// Action to get one random jobWorker for the homepage presentation
export const GET_RANDOM_JOBWORKER = 'GET_RANDOM_JOBWORKER';

// Action to save random jobWorker's informations
export const SAVE_RANDOM_JOBWORKER = 'SAVE_RANDOM_JOBWORKER';

// Action to get all jobWorkers
export const GET_JOBWORKER = 'GET_JOBWORKER';

// Action to save all jobWorkers
export const SAVE_JOBWORKER = 'SAVE_JOBWORKER';

// Action to get only six random jobWorker for service detail page
export const GET_SIX_RANDOM_JOBWORKER = 'GET_SIX_RANDOM_JOBWORKER';

// Action to save only six random jobWorker for service detail page
export const SAVE_SIX_RANDOM_JOBWORKER = 'SAVE_SIX_RANDOM_JOBWORKER';

// Action to get user data from the API
export const GET_USER_DATA = 'GET_USER_DATA';

// Action to get jobWorker detail from the API
export const GET_JOBWORKER_DETAIL = 'GET_JOBWORKER_DETAIL';

// Action to save jobWorker detail
export const SAVE_JOBWORKER_DETAIL = 'SAVE_JOBWORKER_DETAIL';

// Action get jobWorker ID
export const GET_JOBWORKER_ID = 'GET_JOBWORKER_ID';

// Action get jobWorker rating from API
export const GET_JOBWORKER_RATING = 'GET_JOBWORKER_RATING';

// Action to save jobWorker rating in the state
export const SAVE_JOBWORKER_RATING = 'SAVE_JOBWORKER_RATING';

// Action to delete disabled status of profil's input
export const CAN_EDIT_PROFIL = 'CAN_EDIT_PROFIL';

// Action to cancel CAN_EDIT_PROFIL's action
export const CANCEL_EDIT = 'CANCEL_EDIT';

// Action to edit field value when can edit profil is true
export const EDIT_FIELD_VALUE = 'EDIT_FIELD_VALUE';

// Action to submit edit to the API
export const SUBMIT_EDIT = 'SUBMIT_EDIT';

// Action to save edit
export const SAVE_EDIT = 'SAVE_EDIT';

// Action to delete user's account
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

// Action to submit DELETE_ACCOUNT's action
export const SUBMIT_DELETE = 'SUBMIT_DELETE';


export const GET_JOBWORKER_SKILLS = 'GET_JOBWORKER_SKILLS';
export const SAVE_JOBWORKER_SKILLS = 'SAVE_JOBWORKER_SKILLS';
export const GET_NEW_SKILL_VALUE = 'GET_NEW_SKILL_VALUE';
export const SAVE_NEW_SKILL_VALUE = 'SAVE_NEW_SKILL_VALUE';
export const SUBMIT_NEW_SKILL = 'SUBMIT_NEW_SKILL';
export const LOG_OUT = 'LOG_OUT';
export const GET_SKILL_ID = 'GET_SKILL_ID';
export const SUBMIT_DELETE_SKILL = 'SUBMIT_DELETE_SKILL';
export const SUBMIT_EDIT_SKILL = 'SUBMIT_EDIT_SKILL';
export const SAVE_URL_AVATAR = 'SAVE_URL_AVATAR';
export const GET_URL_AVATAR = 'GET_URL_AVATAR';
export const SAVE_EDIT_URL_AVATAR = 'SAVE_EDIT_URL_AVATAR';
export const SUBMIT_AVATAR = 'SAVE_AVATAR';
export const IS_SKILL_SAVE = 'IS_SKILL_SAVE';
export const CLEAR_SAVE = 'CLEAR_SAVE';
export const SAVE_ERROR_CONNEXION = 'SAVE_ERROR_CONNEXION';
export const GET_JOBWORKER_SERVICE = 'GET_JOBWORKER_SERVICE';
export const SAVE_JOBWORKER_SERVICE = 'SAVE_JOBWORKER_SERIVE';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
export const OPEN_SUCCESS_MESSAGE = 'OPEN_SUCCESS_MESSAGE';
export const CLOSE_SUCCESS_MESSAGE = 'CLOSE_SUCCESS_MESSAGE';
export const ERROR_PASSWORD_MESSAGE = 'ERROR_PASSWORD_MESSAGE';
export const CLOSE_ERROR_MESSAGE = 'CLOSE_ERROR_MESSAGE';
export const CHECK_USER_CONFIRMED = 'CHECK_USER_CONFIRMED';
export const SAVE_USER_CONFIRMED = 'SAVE_USER_CONFIRMED';
export const CLOSE_ERROR_CONFIRMED_MESSAGE = 'CLOSE_ERROR_CONFIRMED_MESSAGE';
export const CLOSE_ERROR_CONNEXION_MESSAGE = 'CLOSE_ERROR_CONNEXION_MESSAGE';


export const saveUserConfirmed = (newState) => ({
  type: SAVE_USER_CONFIRMED,
  newState,
});

export const checkUserConfirmed = () => ({
  type: CHECK_USER_CONFIRMED,
});

export const changeField = (newValue, inputName) => ({
  type: CHANGE_FIELD,
  newValue,
  inputName,
});

export const submitLoggin = () => ({
  type: SUBMIT_LOGIN,
});

export const changeCurrentPage = (newCurrentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  newCurrentPage,
});

export const saveUser = (info) => ({
  type: SAVE_USER,
  info,
});

export const getRandomJobWorker = () => ({
  type: GET_RANDOM_JOBWORKER,
});

export const saveRandomJobWorker = (newRandomJobWorker) => ({
  type: SAVE_RANDOM_JOBWORKER,
  newRandomJobWorker,
});


export const getJobWorker = () => ({
  type: GET_JOBWORKER,
});

export const saveJobWorker = (newJobWorker) => ({
  type: SAVE_JOBWORKER,
  newJobWorker,
});

export const getSixJobWorker = () => ({
  type: GET_SIX_RANDOM_JOBWORKER,
});

export const saveSixJobWorker = (sixJobWorker) => ({
  type: SAVE_SIX_RANDOM_JOBWORKER,
  sixJobWorker,
});


export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const getJobWorkerId = (jobWorkerId) => ({
  type: GET_JOBWORKER_ID,
  jobWorkerId,
});

export const getJobWorkerDetail = () => ({
  type: GET_JOBWORKER_DETAIL,
});

export const saveJobWorkerDetail = (detail) => ({
  type: SAVE_JOBWORKER_DETAIL,
  detail,
});
export const getJobWorkerRating = () => ({
  type: GET_JOBWORKER_RATING,
});

export const saveJobWorkerRating = (rating) => ({
  type: SAVE_JOBWORKER_RATING,
  rating,
});

export const canEditProfil = () => ({
  type: CAN_EDIT_PROFIL,
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
});

export const editFieldValue = (value, name) => ({
  type: EDIT_FIELD_VALUE,
  value,
  name,
});

export const submitEdit = () => ({
  type: SUBMIT_EDIT,
});

export const saveEdit = (userData) => ({
  type: SAVE_EDIT,
  userData,
});

export const submitDelete = () => ({
  type: SUBMIT_DELETE,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const getJobWorkerSkill = () => ({
  type: GET_JOBWORKER_SKILLS,
});

export const saveJobWorkerSkills = (skills) => ({
  type: SAVE_JOBWORKER_SKILLS,
  skills,
});

export const getNewSkillValue = (skillValue, nameInput) => ({
  type: GET_NEW_SKILL_VALUE,
  skillValue,
  nameInput,
});

export const saveNewSkillValue = () => ({
  type: SAVE_NEW_SKILL_VALUE,
});

export const submitNewSkill = () => ({
  type: SUBMIT_NEW_SKILL,
});

export const getSkillId = (id) => ({
  type: GET_SKILL_ID,
  id,
});

export const submitDeleteSkill = () => ({
  type: SUBMIT_DELETE_SKILL,
});

export const submitEditSkill = () => ({
  type: SUBMIT_EDIT_SKILL,
});

export const saveUrlAvatar = (avatar) => ({
  type: SAVE_URL_AVATAR,
  avatar,
});

export const getUrlAvatar = (newAvatar) => ({
  type: GET_URL_AVATAR,
  newAvatar,
});

export const subitAvatar = () => ({
  type: SUBMIT_AVATAR,
});

export const isSkillSave = () => ({
  type: IS_SKILL_SAVE,
});

export const clearSave = () => ({
  type: CLEAR_SAVE,
});

export const saveErrorConnexion = (error) => ({
  type: SAVE_ERROR_CONNEXION,
  error,
});

export const getJobWorkerService = () => ({
  type: GET_JOBWORKER_SERVICE,
});

export const saveJobWorkerService = (service) => ({
  type: SAVE_JOBWORKER_SERVICE,
  service,
});
export const openSuccesMessage = () => ({
  type: OPEN_SUCCESS_MESSAGE,
});
export const closeSuccesMessage = () => ({
  type: CLOSE_SUCCESS_MESSAGE,
});
export const errorPasswordMessage = () => ({
  type: ERROR_PASSWORD_MESSAGE,
});
export const closeErrorMessage = () => ({
  type: CLOSE_ERROR_MESSAGE,
});
export const closeErrorConfirmedMessage = () => ({
  type: CLOSE_ERROR_CONFIRMED_MESSAGE,
});
export const closeErrorConnexionMessage = () => ({
  type: CLOSE_ERROR_CONNEXION_MESSAGE,
});
