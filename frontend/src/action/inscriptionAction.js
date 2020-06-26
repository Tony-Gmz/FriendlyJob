// Action to get input's value
export const FIELD_VALUE = 'FIELD_VALUE';

// Action to send user's information to the API
export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';
export const IS_SUBSCRIBE = 'IS_SUBSCRIBE';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const OPEN_ERROR_MESSAGE_INSCRIPTION = 'OPEN_ERROR_MESSAGE_INSCRIPTION';
export const CLOSE_ERROR_MESSAGE_INSCRIPTION = 'CLOSE_ERROR_MESSAGE_INSCRIPTION';

// Method to get input's value with two payload
export const fieldValue = (newValue, inputName) => ({
  type: FIELD_VALUE,
  newValue,
  inputName,
});

// Method to send user's information to the API
export const submitSubscribe = () => ({
  type: SUBMIT_SUBSCRIBE,
});

// Method to define if the submit was good or not  and print a message to inform users
export const IsSubscribe = () => ({
  type: IS_SUBSCRIBE,
});
export const openErrorMessageInscription = () => ({
  type: OPEN_ERROR_MESSAGE_INSCRIPTION,
});
export const closeErrorMessageInscription = () => ({
  type: CLOSE_ERROR_MESSAGE_INSCRIPTION,
});
