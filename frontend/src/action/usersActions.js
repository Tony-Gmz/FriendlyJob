/* eslint-disable import/prefer-default-export */
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const GET_RANDOM_JOBWORKER = 'GET_RANDOM_JOBWORKER';
export const SAVE_RANDOM_JOBWORKER = 'SAVE_RANDOM_JOBWORKER';
export const GET_RANDOM_JOBWORKER_RATING = 'GET_RANDOM_JOBWORKER_RATING';
export const SAVE_RATING_RANDOM_JOBWORKER = 'SAVE_RATING_RANDOM_JOBWORKER';

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

export const getRandomJobWorker = () => ({
  type: GET_RANDOM_JOBWORKER,
});

export const saveRandomJobWorker = (newRandomJobWorker) => ({
  type: SAVE_RANDOM_JOBWORKER,
  newRandomJobWorker,
});

export const saveRatingRandomJobWorker = (newRating) => ({
  type: SAVE_RATING_RANDOM_JOBWORKER,
  newRating,
});

export const getRandomJobWorkerRating = () => ({
  type: GET_RANDOM_JOBWORKER_RATING,
});
