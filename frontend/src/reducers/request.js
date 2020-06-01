import { SAVE_REQUEST } from '../action/requestAction';

const initialState = {
  requestList: [],
};

const requestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REQUEST:
      return {
        ...state,
        requestList: action.newRequest,
      };

    default: return state;
  }
};

export default requestReducer;
