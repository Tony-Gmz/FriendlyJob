/* eslint-disable import/prefer-default-export */
export const GET_TOKEN = 'GET_TOKEN';
export const SAVE_TOKEN = 'SAVE_TOKEN';


export const getToken = () => ({
  type: GET_TOKEN,
});

export const saveToken = (newToken) => ({
  type: SAVE_TOKEN,
  token: newToken,
});
