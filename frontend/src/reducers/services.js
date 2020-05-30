import { SAVE_SERVICES, FIELD_SERVICE, GET_SERVICE_ID } from '../action/servicesActions';

const initialState = {
  // Initial State
  /** List of service */
  serviceList: [],
  loading: true,
  serviceSelected: '',
  serviceName: null,
};

const servicesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERVICES:
      return {
        ...state,
        serviceList: action.newServices,
        loading: false,
      };
    case FIELD_SERVICE:
      return {
        ...state,
        serviceSelected: action.selectedService,
      };
    case GET_SERVICE_ID:
      return {
        ...state,
        serviceName: action.serviceId,
      };
    default: return state;
  }
};

export default servicesReducer;
