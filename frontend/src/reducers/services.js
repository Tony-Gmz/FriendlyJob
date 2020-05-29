import { SAVE_SERVICES, FIELD_SERVICE } from '../action/servicesActions';

const initialState = {
  // Initial State
  /** List of service */
  serviceList: [],
  loading: true,
  serviceSelected: '',
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
    default: return state;
  }
};

export default servicesReducer;
