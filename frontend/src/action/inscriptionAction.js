// Action to get input's value
export const FIELD_VALUE = 'FIELD_VALUE';

// Action to send user's information to the API
export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';

// Action to define if the submit was good or not and print a message to inform users
export const IS_SUBSCRIBE = 'IS_SUBSCRIBE';

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
