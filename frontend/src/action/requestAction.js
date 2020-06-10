// == EXPORT FOR REQUEST PART
export const GET_REQUEST = 'GET_REQUEST';
export const SAVE_REQUEST = 'SAVE_REQUEST';
export const CHANGE_FIELD_REQUEST = 'CHANGE_FIELD_REQUEST';
export const SUBMIT_REQUEST = 'SUBMIT_LOGIN_REQUEST';
export const SAVE_NEW_REQUEST = 'SAVE_NEW_REQUEST';
export const CHANGE_FIELD_DATE_REQUEST = 'CHANGE_FIELD_DATE_REQUEST';
export const CHANGE_FIELD_HOUR_REQUEST = 'CHANGE_FIELD_HOUR_REQUEST';
export const SUBMIT_CANCEL_REQUEST = 'SUBMIT_CANCEL_REQUEST';
export const SUBMIT_REFUSE_REQUEST = 'SUBMIT_REFUSE_REQUEST';
export const SUBMIT_ACCEPTE_REQUEST = 'SUBMIT_ACCEPTE_REQUEST';
export const SUBMIT_DELETE_REQUEST = 'SUBMIT_DELETE_REQUEST';
export const SUBMIT_FINISH_REQUEST = 'SUBMIT_FINISH_REQUEST';
export const SUBMIT_SET_REQUEST = 'SUBMIT_SET_REQUEST';
export const SAVE_TOGGLE = 'SAVE_TOGGLE';
export const DISPLAY_HOUR = 'DISPLAY_HOUR';
export const GET_REQUEST_DATE = 'GET_REQUEST_DATE';
export const GET_REQUEST_HOUR = 'GET_REQUEST_HOUR';
export const IS_REQUEST_REFUSE = 'IS_REQUEST_REFUSE';
export const CLEAR_REFUSE = 'CLEAR_REFUSE';

// == EXPORT FOR COMMENT PART
export const GET_COMMENT_ID = 'GET_COMMENT_ID';
export const CHANGE_FIELD_COMMENT = 'CHANGE_FIELD_COMMENT';
export const CHANGE_RATING_COMMENT = 'CHANGE_RATING_COMMENT';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const IS_COMMENT_SEND = 'IS_COMMENT_SEND';
export const CLEAR_SAVE = 'CLEAR_SAVE';


// ========================================= REQUEST ==================================

export const getRequest = () => ({
  type: GET_REQUEST,
});

export const saveToggle = (newToggle) => ({
  type: SAVE_TOGGLE,
  newToggle,
});

export const saveRequest = (newRequest) => ({
  type: SAVE_REQUEST,
  newRequest,
});

export const changeFieldRequest = (newValue, inputName) => ({
  type: CHANGE_FIELD_REQUEST,
  newValue,
  inputName,
});

export const submitRequest = () => ({
  type: SUBMIT_REQUEST,
});

export const saveNewRequest = (addRequest) => ({
  type: SAVE_NEW_REQUEST,
  addRequest,
});

export const changeFieldDateRequest = (newDate) => ({
  type: CHANGE_FIELD_DATE_REQUEST,
  newDate,
});

export const changeFieldHourRequest = (newHour) => ({
  type: CHANGE_FIELD_HOUR_REQUEST,
  newHour,
});

export const submitCancelRequest = () => ({
  type: SUBMIT_CANCEL_REQUEST,
});

export const submitRefuseRequest = () => ({
  type: SUBMIT_REFUSE_REQUEST,
});

export const submitAccepteRequest = () => ({
  type: SUBMIT_ACCEPTE_REQUEST,
});

export const submitDeleteRequest = () => ({
  type: SUBMIT_DELETE_REQUEST,
});

export const submitFinishRequest = () => ({
  type: SUBMIT_FINISH_REQUEST,
});

export const submitSetRequest = () => ({
  type: SUBMIT_SET_REQUEST,
});

export const displayHour = (initialHour) => ({
  type: DISPLAY_HOUR,
  initialHour,
});
export const getRequestDate = (reservationDate) => ({
  type: GET_REQUEST_DATE,
  reservationDate,
});
export const getRequestHour = (reservationHour) => ({
  type: GET_REQUEST_HOUR,
  reservationHour,
});
export const isRequestRefuse = () => ({
  type: IS_REQUEST_REFUSE,
});
export const clearRefuse = () => ({
  type: CLEAR_REFUSE,
});
// ========================================= COMMENT ==================================

export const getCommentId = (commentId) => ({
  type: GET_COMMENT_ID,
  commentId,
});

export const changeFieldComment = (newValue, inputName) => ({
  type: CHANGE_FIELD_COMMENT,
  newValue,
  inputName,
});

export const changeRatingComment = (newRate) => ({
  type: CHANGE_RATING_COMMENT,
  newRate,
});

export const submitComment = () => ({
  type: SUBMIT_COMMENT,
});

export const isCommentSend = () => ({
  type: IS_COMMENT_SEND,
});

export const clearSave = () => ({
  type: CLEAR_SAVE,
});
