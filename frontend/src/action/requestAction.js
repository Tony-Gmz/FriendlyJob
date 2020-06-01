export const GET_REQUEST = 'GET_REQUEST';
export const SAVE_REQUEST = 'SAVE_REQUEST';

export const getRequest = () => ({
  type: GET_REQUEST,
});

export const saveRequest = (newRequest) => ({
  type: SAVE_REQUEST,
  newRequest,
});
