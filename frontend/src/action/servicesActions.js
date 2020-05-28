export const GET_SERVICES = 'GET_SERVICES';
export const SAVE_SERVICES = 'SAVE_SERVICES';

export const getServices = () => ({
  type: GET_SERVICES,
});

export const saveServices = (newServices) => ({
  type: SAVE_SERVICES,
  newServices,
});
