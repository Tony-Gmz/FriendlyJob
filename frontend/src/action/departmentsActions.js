/* eslint-disable import/prefer-default-export */

// action to get all departments
export const GET_ALL_DEPARTMENTS = 'GET_ALL_DEPARTMENTS';
// action to save all departments
export const SAVE_DEPARTMENTS = 'SAVE_DEPARTMENTS';

// method to get all departments
export const getAllDepartments = () => ({
  type: GET_ALL_DEPARTMENTS,
});

// method to save all departments
export const saveDepartments = (departments) => ({
  type: SAVE_DEPARTMENTS,
  departments,
});
