// Action to get all services from the api
export const GET_SERVICES = 'GET_SERVICES';

// Action to save all services
export const SAVE_SERVICES = 'SAVE_SERVICES';

// Action to get the input's service's value
export const FIELD_SERVICE = 'FIELD_SERVICE';

// Action to get the name of the selected service
export const GET_SERVICE_NAME = 'GET_SERVICE_NAME';

// Method to get all services from the api
export const getServices = (newValue, inputName) => ({
  type: GET_SERVICES,
});

// Methode to save all services
export const saveServices = (newServices) => ({
  type: SAVE_SERVICES,
  newServices,
});

// Method to get the input's service's value
export const fieldService = (selectedService) => ({
  type: FIELD_SERVICE,
  selectedService,
});

// Method to get the name of the selected service
export const getServiceName = (serviceName) => ({
  type: GET_SERVICE_NAME,
  serviceName,
});
