/* eslint-disable import/prefer-default-export */
export const FIED_VALUE = 'FIELD_VALUE';
export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';
export const IS_SUBSCRIBE = 'IS_SUBSCRIBE';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const OPEN_ERROR_MESSAGE_INSCRIPTION = 'OPEN_ERROR_MESSAGE_INSCRIPTION';
export const CLOSE_ERROR_MESSAGE_INSCRIPTION = 'CLOSE_ERROR_MESSAGE_INSCRIPTION';

export const fieldValue = (newValue, inputName) => ({
  type: FIED_VALUE,
  newValue,
  inputName,
});

export const submitSubscribe = () => ({
  type: SUBMIT_SUBSCRIBE,
});

export const IsSubscribe = () => ({
  type: IS_SUBSCRIBE,
});
export const openErrorMessageInscription = () => ({
  type: OPEN_ERROR_MESSAGE_INSCRIPTION,
});
export const closeErrorMessageInscription = () => ({
  type: CLOSE_ERROR_MESSAGE_INSCRIPTION,
});
