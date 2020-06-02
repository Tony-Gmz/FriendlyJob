export const GET_SERVICES = 'GET_SERVICES';
export const SAVE_SERVICES = 'SAVE_SERVICES';
export const FIELD_SERVICE = 'SELECT_SERVICE';
export const GET_SERVICE_NAME = 'GET_SERVICE_NAME';

export const getServices = (newValue, inputName) => ({
  type: GET_SERVICES,
  
});

export const saveServices = (newServices) => ({
  type: SAVE_SERVICES,
  newServices,
});

export const fieldService = (selectedService) => ({
  type: FIELD_SERVICE,
  selectedService,
});

export const getServiceName = (serviceName) => ({
  type: GET_SERVICE_NAME,
  serviceName,
});
