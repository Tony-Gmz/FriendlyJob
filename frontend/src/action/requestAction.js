// == EXPORT FOR REQUEST PART
// action to get all request
export const GET_REQUEST = 'GET_REQUEST';

// action to save all request
export const SAVE_REQUEST = 'SAVE_REQUEST';

// action to get field value in ReservationModal
export const CHANGE_FIELD_REQUEST = 'CHANGE_FIELD_REQUEST';

// action to submit new Request
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';

// action to save new Request
export const SAVE_NEW_REQUEST = 'SAVE_NEW_REQUEST';

// action to get the date of the new request in ModalReservation
export const CHANGE_FIELD_DATE_REQUEST = 'CHANGE_FIELD_DATE_REQUEST';

// action to get the hour of the new request in ModalReservation
export const CHANGE_FIELD_HOUR_REQUEST = 'CHANGE_FIELD_HOUR_REQUEST';

// action to cancel a request for a friendlyUser
export const SUBMIT_CANCEL_REQUEST = 'SUBMIT_CANCEL_REQUEST';

// action to refuse a request for a jobWorker
export const SUBMIT_REFUSE_REQUEST = 'SUBMIT_REFUSE_REQUEST';

//  action to accepte a request for a jobWorker
export const SUBMIT_ACCEPTE_REQUEST = 'SUBMIT_ACCEPTE_REQUEST';

// action to delete a request
export const SUBMIT_DELETE_REQUEST = 'SUBMIT_DELETE_REQUEST';

// action to archive a request
export const SUBMIT_FINISH_REQUEST = 'SUBMIT_FINISH_REQUEST';

// action to submit edited request
export const SUBMIT_SET_REQUEST = 'SUBMIT_SET_REQUEST';

// action to save the new value of toggle
export const SAVE_TOGGLE = 'SAVE_TOGGLE';

export const DISPLAY_HOUR = 'DISPLAY_HOUR';

// action to get the date of the request in modalEditRequest
export const GET_REQUEST_DATE = 'GET_REQUEST_DATE';

// action to get the hour of the request in modalEditRequest
export const GET_REQUEST_HOUR = 'GET_REQUEST_HOUR';

// action to set isRefuse in requestReducer at true
export const IS_REQUEST_REFUSE = 'IS_REQUEST_REFUSE';

// action to set isResuer in requestReducer at false
export const CLEAR_REFUSE = 'CLEAR_REFUSE';

// action to set new value to requestSelected in requestReducer
export const REQUEST_SORT_SELECTED = 'REQUEST_SORT_SELECTED';

// action to get the name of the request selected
export const GET_REQUEST_SELECTED_NAME = 'GET_REQUEST_SELECTED_NAME';

// action to set requestSelected in requestReducer at null
export const RESET_REQUEST_SELECTED = 'RESET_REQUEST_SELECTED';

// action to set requestList in requestReducer at null
export const RESET_REQUEST_LIST = 'RESET_REQUEST_LIST';

// action to set errorMessageReservation in requestReducer at true
export const ERROR_MESSAGE_RESERVATION = 'ERROR_MESSAGE_RESERVATION';

// action to get the comment's id
export const GET_REQUEST_ID = 'GET_REQUEST_ID';

// == EXPORT FOR COMMENT PART


// action to get the value of field comment in modalComment
export const CHANGE_FIELD_COMMENT = 'CHANGE_FIELD_COMMENT';

// action to get the value of the rating in modalComment
export const CHANGE_RATING_COMMENT = 'CHANGE_RATING_COMMENT';

// action to submit a comment
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';

// action to set isSend in requestReducer at true
export const IS_COMMENT_SEND = 'IS_COMMENT_SEND';

// action to set isSend in requestReducer at false
export const CLEAR_SAVE = 'CLEAR_SAVE';


// ========================================= REQUEST ==================================

/**
 * Method to get the hour of the request in modalEditRequest
 */
export const resetRequestSelected = () => ({
  type: RESET_REQUEST_SELECTED,
});

/**
 * Method to set new value to requestSelected in requestReducer
 * @param {*} newSort
 */
export const requestSortSelected = (newSort) => ({
  type: REQUEST_SORT_SELECTED,
  newSort,
});

/**
 * Method to get the name of the request selected
 * @param {*} newName
 */
export const getRequestSelectedName = (newName) => ({
  type: GET_REQUEST_SELECTED_NAME,
  newName,
});

/**
 * Method to get all request
 */
export const getRequest = () => ({
  type: GET_REQUEST,
});

/**
 * Method to save the new value of toggle
 * @param {*} newToggle
 */
export const saveToggle = (newToggle) => ({
  type: SAVE_TOGGLE,
  newToggle,
});

/**
 * Method to save newRequest
 * @param {*} newRequest
 */
export const saveRequest = (newRequest) => ({
  type: SAVE_REQUEST,
  newRequest,
});

/**
 * Method to get field value in ReservationModal
 * @param {*} newValue
 * @param {*} inputName
 */
export const changeFieldRequest = (newValue, inputName) => ({
  type: CHANGE_FIELD_REQUEST,
  newValue,
  inputName,
});

/**
 * Method to submit new Request
 */
export const submitRequest = () => ({
  type: SUBMIT_REQUEST,
});

/**
 * Method to save newRequest
 * @param {*} addRequest
 */
export const saveNewRequest = (addRequest) => ({
  type: SAVE_NEW_REQUEST,
  addRequest,
});

/**
 * Method to get the date of the new request in ModalReservation
 * @param {*} newDate 
 */
export const changeFieldDateRequest = (newDate) => ({
  type: CHANGE_FIELD_DATE_REQUEST,
  newDate,
});

/**
 * Method to get the hour of the new request in ModalReservation
 * @param {*} newHour
 */
export const changeFieldHourRequest = (newHour) => ({
  type: CHANGE_FIELD_HOUR_REQUEST,
  newHour,
});

/**
 * Method to cancel Request
 */
export const submitCancelRequest = () => ({
  type: SUBMIT_CANCEL_REQUEST,
});

/**
 * Method to refuse a request for a jobWorker
 */
export const submitRefuseRequest = () => ({
  type: SUBMIT_REFUSE_REQUEST,
});

/**
 * Method to accept a request for a friendlyUser
 */
export const submitAccepteRequest = () => ({
  type: SUBMIT_ACCEPTE_REQUEST,
});

/**
 * Method to submit the delete of the request
 */
export const submitDeleteRequest = () => ({
  type: SUBMIT_DELETE_REQUEST,
});

/**
 * Method to archive request
 */
export const submitFinishRequest = () => ({
  type: SUBMIT_FINISH_REQUEST,
});

/**
 * Method to submit the edited request
 */
export const submitSetRequest = () => ({
  type: SUBMIT_SET_REQUEST,
});

/**
 * 
 * @param {*} initialHour
 */
export const displayHour = (initialHour) => ({
  type: DISPLAY_HOUR,
  initialHour,
});

/**
 * action to get the date of the request in modalEditRequest
 * @param {*} reservationDate
 */
export const getRequestDate = (reservationDate) => ({
  type: GET_REQUEST_DATE,
  reservationDate,
});

/**
 * action to get the hour of the request in modalEditRequest
 * @param {*} reservationHour
 */
export const getRequestHour = (reservationHour) => ({
  type: GET_REQUEST_HOUR,
  reservationHour,
});

/**
 * Method to set isRefuse in requestReducer at true
 */
export const isRequestRefuse = () => ({
  type: IS_REQUEST_REFUSE,
});

/**
 * Method to set isRefuse in requestReducer at false
 */
export const clearRefuse = () => ({
  type: CLEAR_REFUSE,
});

/**
 * Method to set RequestList in requestReducer at null
 */
export const resetRequestList = () => ({
  type: RESET_REQUEST_LIST,
});

/**
 * Method to set errorMessageReservation in requestReducer at true
 */
export const errorMesssageReservation = () => ({
  type: ERROR_MESSAGE_RESERVATION,
});
// ========================================= COMMENT ==================================

/**
 * Method to get the comment's id
 * @param {*} requestId
 */
export const getRequestId = (requestId) => ({
  type: GET_REQUEST_ID,
  requestId,
});

/**
 * Method to get the value of field comment in modalComment
 * @param {*} newValue
 * @param {*} inputName
 */
export const changeFieldComment = (newValue, inputName) => ({
  type: CHANGE_FIELD_COMMENT,
  newValue,
  inputName,
});

/**
 * Method to get the value of the rating in modalComment
 * @param {*} newRate 
 */
export const changeRatingComment = (newRate) => ({
  type: CHANGE_RATING_COMMENT,
  newRate,
});

/**
 * Method to submit a new comment
 */
export const submitComment = () => ({
  type: SUBMIT_COMMENT,
});

/**
 * Method to set isSend in requestReducer at true 
 */
export const isCommentSend = () => ({
  type: IS_COMMENT_SEND,
});

/**
 * Method to set isSend in requestReducer at false
 */
export const clearSave = () => ({
  type: CLEAR_SAVE,
});
