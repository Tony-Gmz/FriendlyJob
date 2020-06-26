// =================================All User===================================
// Action de get the value of connexion modal
export const CHANGE_FIELD = 'CHANGE_FIELD';
// Action to send users informations to the API
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// Action to get user data from the API
export const GET_USER_DATA = 'GET_USER_DATA';
// Action to save user data in the state
export const SAVE_USER = 'SAVE_USER';
// action to log out when user want to leave our app
export const LOG_OUT = 'LOG_OUT';
// action to change current page in the state for pagination
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
// action to check if users are confirmed (email) or not
export const CHECK_USER_CONFIRMED = 'CHECK_USER_CONFIRMED';
// action to save confirmed status
export const SAVE_USER_CONFIRMED = 'SAVE_USER_CONFIRMED';
// =================================Profil===================================
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
// Action to get new skill add by  the jobWorker
export const GET_NEW_SKILL_VALUE = 'GET_NEW_SKILL_VALUE';
// Action to save new skill add by the jobWorker
export const SAVE_NEW_SKILL_VALUE = 'SAVE_NEW_SKILL_VALUE';
// Action to get all skills of a jobWorker
export const GET_JOBWORKER_SKILLS = 'GET_JOBWORKER_SKILLS';
// Action to save all skills in the state
export const SAVE_JOBWORKER_SKILLS = 'SAVE_JOBWORKER_SKILLS';
// Action to submit the new skill to the API
export const SUBMIT_NEW_SKILL = 'SUBMIT_NEW_SKILL';
// Action to get skill id on input select skill
export const GET_SKILL_ID = 'GET_SKILL_ID';
// Action to delete a skill in jobworker's profil
export const SUBMIT_DELETE_SKILL = 'SUBMIT_DELETE_SKILL';
// Action to submit modification of a skill in jobworker's profil
export const SUBMIT_EDIT_SKILL = 'SUBMIT_EDIT_SKILL';
// action to get the URL of users profil's picture
export const GET_URL_AVATAR = 'GET_URL_AVATAR';
// action to save the URL of users profil's picture
export const SAVE_URL_AVATAR = 'SAVE_URL_AVATAR';
// Action to submit avatar to the API
export const SUBMIT_AVATAR = 'SUBMIT_AVATAR';
// =================================JobWorker===================================
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
// Action to get jobWorkers'services
export const GET_JOBWORKER_SERVICE = 'GET_JOBWORKER_SERVICE';
// Action to save jobWorkers'services
export const SAVE_JOBWORKER_SERVICE = 'SAVE_JOBWORKER_SERVICE';
// =================================Message===================================
// Action to switch state of isSave to true
export const IS_SKILL_SAVE = 'IS_SKILL_SAVE';
// Action to switch state of isSave to false
export const CLEAR_SAVE = 'CLEAR_SAVE';
// Action to switch state of isOpen to true
export const OPEN_SUCCESS_MESSAGE = 'OPEN_SUCCESS_MESSAGE';
// Action to switch state of isOpen to false
export const CLOSE_SUCCESS_MESSAGE = 'CLOSE_SUCCESS_MESSAGE';
// Action to switch state of errorMessage to true
export const ERROR_PASSWORD_MESSAGE = 'ERROR_PASSWORD_MESSAGE';
// Action to switch state of errorMessage to false
export const CLOSE_ERROR_MESSAGE = 'CLOSE_ERROR_MESSAGE';
/*
 Action to switch state of errorConfirmedMessage to false 
 (message to explain users need to confirm with the link sent by email) 
*/
export const CLOSE_ERROR_CONFIRMED_MESSAGE = 'CLOSE_ERROR_CONFIRMED_MESSAGE';
// Action to switch state of errorConnexion to true
export const SAVE_ERROR_CONNEXION = 'SAVE_ERROR_CONNEXION';
// Action to switch state of errorConnexion to false
export const CLOSE_ERROR_CONNEXION_MESSAGE = 'CLOSE_ERROR_CONNEXION_MESSAGE';
// ====================================Method==========================

/**
 * Method to check the value of isConfirmed in user data
 */
export const checkUserConfirmed = () => ({
  type: CHECK_USER_CONFIRMED,
});

/**
 * Method to save the value of isConfirmed
 * @param {*} newState
 */
export const saveUserConfirmed = (newState) => ({
  type: SAVE_USER_CONFIRMED,
  newState,
});

/**
 * Method to get the value of connexion's modal
 * @param {*} newValue
 * @param {*} inputName
 */
export const changeField = (newValue, inputName) => ({
  type: CHANGE_FIELD,
  newValue,
  inputName,
});

/**
 * Method to submit login
 */
export const submitLoggin = () => ({
  type: SUBMIT_LOGIN,
});

/**
 * Method to change the current page value ine the state
 * @param {*} newCurrentPage
 */
export const changeCurrentPage = (newCurrentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  newCurrentPage,
});

/**
 * Method to get user data
 */
export const getUserData = () => ({
  type: GET_USER_DATA,
});

/**
 * Method to save user data
 * @param {*} info
 */
export const saveUser = (info) => ({
  type: SAVE_USER,
  info,
});

/**
 * Method to get random jobWorker
 */
export const getRandomJobWorker = () => ({
  type: GET_RANDOM_JOBWORKER,
});

/**
 * Method to save random jobWorker data
 * @param {*} newRandomJobWorker
 */
export const saveRandomJobWorker = (newRandomJobWorker) => ({
  type: SAVE_RANDOM_JOBWORKER,
  newRandomJobWorker,
});

/**
 * Method to get jobWorker data
 */
export const getJobWorker = () => ({
  type: GET_JOBWORKER,
});

/**
 * Method to save jobWorker data
 * @param {*} newJobWorker
 */
export const saveJobWorker = (newJobWorker) => ({
  type: SAVE_JOBWORKER,
  newJobWorker,
});

/**
 * Method to get six jobWorker data
 */
export const getSixJobWorker = () => ({
  type: GET_SIX_RANDOM_JOBWORKER,
});

/**
 * Method to save six jobWorker data
 * @param {*} sixJobWorker
 */
export const saveSixJobWorker = (sixJobWorker) => ({
  type: SAVE_SIX_RANDOM_JOBWORKER,
  sixJobWorker,
});

/**
 * Method to get jobWorker id
 * @param {*} jobWorkerId
 */
export const getJobWorkerId = (jobWorkerId) => ({
  type: GET_JOBWORKER_ID,
  jobWorkerId,
});

/**
 * Method to get jobWorker detail
 */
export const getJobWorkerDetail = () => ({
  type: GET_JOBWORKER_DETAIL,
});

/**
 * Method to save jobWorker detail
 * @param {*} detail
 */
export const saveJobWorkerDetail = (detail) => ({
  type: SAVE_JOBWORKER_DETAIL,
  detail,
});

/**
 * Method to get jobWorker rating
 */
export const getJobWorkerRating = () => ({
  type: GET_JOBWORKER_RATING,
});

/**
 * Method to save jobWorker rating
 * @param {*} rating
 */
export const saveJobWorkerRating = (rating) => ({
  type: SAVE_JOBWORKER_RATING,
  rating,
});

/**
 * Method to cancel input's disabled status in profil page
 */
export const canEditProfil = () => ({
  type: CAN_EDIT_PROFIL,
});

/**
 * Method to cancel edit profil state
 */
export const cancelEdit = () => ({
  type: CANCEL_EDIT,
});

/**
 * Method to get value of profil's input
 * @param {*} value
 * @param {*} name
 */
export const editFieldValue = (value, name) => ({
  type: EDIT_FIELD_VALUE,
  value,
  name,
});

/**
 * Method to submit edit on profil
 */
export const submitEdit = () => ({
  type: SUBMIT_EDIT,
});

/**
 * Method to save edit in the state
 */
export const saveEdit = (userData) => ({
  type: SAVE_EDIT,
  userData,
});

/**
 * Method to submit delete profil
 */
export const submitDelete = () => ({
  type: SUBMIT_DELETE,
});

/**
 * Method to submit edit on profil
 */
export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

/**
 * Method to logout
 */
export const logOut = () => ({
  type: LOG_OUT,
});

/**
 * Method to get jobWorker skills
 */
export const getJobWorkerSkill = () => ({
  type: GET_JOBWORKER_SKILLS,
});

/**
 * Method to save jobWorker skills
 */
export const saveJobWorkerSkills = (skills) => ({
  type: SAVE_JOBWORKER_SKILLS,
  skills,
});

/**
 * Method to get the skill added by the jobWorker
 * @param {*} skillValue
 * @param {*} nameInput
 */
export const getNewSkillValue = (skillValue, nameInput) => ({
  type: GET_NEW_SKILL_VALUE,
  skillValue,
  nameInput,
});

/**
 * Method to save the skill added by the jobWorker
 */
export const saveNewSkillValue = () => ({
  type: SAVE_NEW_SKILL_VALUE,
});

/**
 * Method to submit the new skill
 */
export const submitNewSkill = () => ({
  type: SUBMIT_NEW_SKILL,
});

/**
 * Method to get skill id
 * @param {*} id
 */
export const getSkillId = (id) => ({
  type: GET_SKILL_ID,
  id,
});

/**
 * Method to submit delete of a skill
 */
export const submitDeleteSkill = () => ({
  type: SUBMIT_DELETE_SKILL,
});

/**
 * Method to submit changement of a skill (price, description)
 */
export const submitEditSkill = () => ({
  type: SUBMIT_EDIT_SKILL,
});

/**
 * Method to save the url of jobWorker profil's picture
 * @param {*} avatar
 */
export const saveUrlAvatar = (avatar) => ({
  type: SAVE_URL_AVATAR,
  avatar,
});

/**
 * Method to get the url of jobWorker profil's picture
 * @param {*} newAvatar
 */
export const getUrlAvatar = (newAvatar) => ({
  type: GET_URL_AVATAR,
  newAvatar,
});

/**
 * Method to subit avatar
 */
export const submitAvatar = () => ({
  type: SUBMIT_AVATAR,
});

/**
 * Method to switch state of isSave to true
 */
export const isSkillSave = () => ({
  type: IS_SKILL_SAVE,
});

/**
 * Method to switch state of isSave to false
 */
export const clearSave = () => ({
  type: CLEAR_SAVE,
});

/**
 * Method to switch state of erroConnexion to true
 * @param {*} error
 */
export const saveErrorConnexion = (error) => ({
  type: SAVE_ERROR_CONNEXION,
  error,
});

/**
 * Method to get jobWorker Services (skills)
 */
export const getJobWorkerService = () => ({
  type: GET_JOBWORKER_SERVICE,
});

/**
 * Method to save jobWorker Services (skills)
 */
export const saveJobWorkerService = (service) => ({
  type: SAVE_JOBWORKER_SERVICE,
  service,
});

/**
 * Method to switch state of isOpen to true
 */
export const openSuccesMessage = () => ({
  type: OPEN_SUCCESS_MESSAGE,
});

/**
 * Method to switch state of isOpen to false
 */
export const closeSuccesMessage = () => ({
  type: CLOSE_SUCCESS_MESSAGE,
});

/**
 * Method to switch state of errorMessage to true
 */
export const errorPasswordMessage = () => ({
  type: ERROR_PASSWORD_MESSAGE,
});

/**
 * Method to switch state of errorMessage to false
 */
export const closeErrorMessage = () => ({
  type: CLOSE_ERROR_MESSAGE,
});

/**
 * Method to switch state of errorConfirmedMessage to false
 */
export const closeErrorConfirmedMessage = () => ({
  type: CLOSE_ERROR_CONFIRMED_MESSAGE,
});

/**
 * Method to switch state of errorConnexion to false
 */
export const closeErrorConnexionMessage = () => ({
  type: CLOSE_ERROR_CONNEXION_MESSAGE,
});
