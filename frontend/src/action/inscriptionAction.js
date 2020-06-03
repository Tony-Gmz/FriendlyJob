/* eslint-disable import/prefer-default-export */
export const FIED_VALUE = 'FIELD_VALUE';
export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';
export const IS_SUBSCRIBE = 'IS_SUBSCRIBE';
export const SAVE_USER_DATA = 'SA'


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
