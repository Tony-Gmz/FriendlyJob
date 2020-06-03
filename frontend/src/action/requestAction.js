// == EXPORT FOR REQUEST PART
export const GET_REQUEST = 'GET_REQUEST';
export const SAVE_REQUEST = 'SAVE_REQUEST';
export const CHANGE_FIELD_REQUEST = 'CHANGE_FIELD_REQUEST';
export const SUBMIT_REQUEST = 'SUBMIT_LOGIN_REQUEST';
export const SAVE_NEW_REQUEST = 'SAVE_NEW_REQUEST';
export const CHANGE_FIELD_DATE_REQUEST = 'CHANGE_FIELD_DATE_REQUEST';
export const CHANGE_FIELD_HOUR_REQUEST = 'CHANGE_FIELD_HOUR_REQUEST';
export const SUBMIT_CANCEL_REQUEST = 'SUBMIT_CANCEL_REQUEST';


// == EXPORT FOR COMMENT PART
export const GET_COMMENT_ID = 'GET_COMMENT_ID';
export const CHANGE_FIELD_COMMENT = 'CHANGE_FIELD_COMMENT';
export const CHANGE_RATING_COMMENT = 'CHANGE_RATING_COMMENT';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';


// ========================================= REQUEST ==================================

export const getRequest = () => ({
  type: GET_REQUEST,
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

