export const GET_REQUEST = 'GET_REQUEST';
export const SAVE_REQUEST = 'SAVE_REQUEST';
export const CHANGE_FIELD_REQUEST = 'CHANGE_FIELD_REQUEST';
export const SUBMIT_REQUEST = 'SUBMIT_LOGIN_REQUEST';
export const SAVE_NEW_REQUEST = 'SAVE_NEW_REQUEST';
export const CHANGE_FIELD_DATE_REQUEST = 'CHANGE_FIELD_DATE_REQUEST';
export const CHANGE_FIELD_HOUR_REQUEST = 'CHANGE_FIELD_HOUR_REQUEST';

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
