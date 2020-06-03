/* eslint-disable import/prefer-default-export */
export const GET_ALL_DEPARTMENTS = 'GET_ALL_DEPARTMENTS';
export const SAVE_DEPARTMENTS = 'SAVE_DEPARTMENTS';

export const getAllDepartments = () => ({
  type: GET_ALL_DEPARTMENTS,
});

export const saveDepartments = (departments) => ({
  type: SAVE_DEPARTMENTS,
  departments,
});
