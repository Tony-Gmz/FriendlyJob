export const GET_SERVICES = 'GET_SERVICES';
export const SAVE_SERVICES = 'SAVE_SERVICES';
export const FIELD_SERVICE = 'SELECT_SERVICE';
export const GET_SERVICE_ID = 'GET_SERVICE_ID';

export const getServices = () => ({
  type: GET_SERVICES,
});

export const saveServices = (newServices) => ({
  type: SAVE_SERVICES,
  newServices,
});

export const fieldService = (selectedService) => ({
 type: FIELD_SERVICE,
 selectedService,
})

export const getServiceId = (serviceId) => ({
  type: GET_SERVICE_ID,
  serviceId,
});
