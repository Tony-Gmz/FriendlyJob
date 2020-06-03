/* eslint-disable import/prefer-default-export */
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const GET_RANDOM_JOBWORKER = 'GET_RANDOM_JOBWORKER';
export const SAVE_RANDOM_JOBWORKER = 'SAVE_RANDOM_JOBWORKER';
export const GET_RANDOM_JOBWORKER_RATING = 'GET_RANDOM_JOBWORKER_RATING';
export const SAVE_RATING_RANDOM_JOBWORKER = 'SAVE_RATING_RANDOM_JOBWORKER';
export const GET_JOBWORKER = 'GET_JOBWORKER';
export const SAVE_JOBWORKER = 'SAVE_JOBWORKER';
export const GET_SIX_RANDOM_JOBWORKER = 'GET_SIX_RANDOM_JOBWORKER';
export const SAVE_SIX_RANDOM_JOBWORKER = 'SAVE_SIX_RANDOM_JOBWORKER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_JOBWORKER_DETAIL = 'GET_JOBWORKER_DETAIL';
export const SAVE_JOBWORKER_DETAIL = 'SAVE_JOBWORKER_DETAIL';
export const GET_JOBWORKER_ID = 'GET_JOBWORKER_ID';
export const GET_JOBWORKER_RATING = 'GET_JOBWORKER_RATING';
export const SAVE_JOBWORKER_RATING = 'SAVE_JOBWORKER_RATING';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
export const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET';
export const LOAD_DATA = 'LOAD_DATA';



export const changeField = (newValue, inputName) => ({
  type: CHANGE_FIELD,
  newValue,
  inputName,
});

export const submitLoggin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveUser = (info) => ({
  type: SAVE_USER,
  info,

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


export const getJobWorker = () => ({
  type: GET_JOBWORKER,
});

export const saveJobWorker = (newJobWorker) => ({
  type: SAVE_JOBWORKER,
  newJobWorker,
});

export const getSixJobWorker = () => ({
  type: GET_SIX_RANDOM_JOBWORKER,
});

export const saveSixJobWorker = (sixJobWorker) => ({
  type: SAVE_SIX_RANDOM_JOBWORKER,
  sixJobWorker,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const getJobWorkerId = (jobWorkerId) => ({
  type: GET_JOBWORKER_ID,
  jobWorkerId,
});

export const getJobWorkerDetail = () => ({
  type: GET_JOBWORKER_DETAIL,
});

export const saveJobWorkerDetail = (detail) => ({
  type: SAVE_JOBWORKER_DETAIL,
  detail,
});
export const getJobWorkerRating = () => ({
  type: GET_JOBWORKER_RATING,
});

export const saveJobWorkerRating = (rating) => ({
  type: SAVE_JOBWORKER_RATING,
  rating,
});

export const sortByPrice = (payload) => ({
  type: SORT_BY_PRICE,
  payload,
});

export const filterByPrice = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const sortByAlphabet = (payload) => ({
  type: SORT_BY_ALPHABET,
  payload,
});
