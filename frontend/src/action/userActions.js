/* eslint-disable import/prefer-default-export */
export const GET_TOKEN = 'GET_TOKEN';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';

export const changeField = (newValue, inputName) => ({
  type: CHANGE_FIELD,
  newValue,
  inputName,
});

export const submitLoggin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveUser = (isLogged, info) => ({
  type: SAVE_USER,
  info,
  isLogged,

});

export const getToken = () => ({
  type: GET_TOKEN,
});

export const saveToken = (newToken) => ({
  type: SAVE_TOKEN,
  token: newToken,
});
