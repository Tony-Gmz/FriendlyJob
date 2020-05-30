import { SAVE_REQUEST } from '../action/requestAction';

const initialState = {
  requestList: [],
  loading: true,
};

const requestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REQUEST:
      return {
        ...state,
        requestList: action.newRequest,
        loading: false,
      };

    default: return state;
  }
};

export default requestReducer;
