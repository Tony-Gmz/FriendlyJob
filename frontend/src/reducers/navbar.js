import { IS_NAVBAR_OPEN } from "../action/navbarAction";

const initialState = {
  isOpen: false,

};

const navbarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_NAVBAR_OPEN:
      return {
        ...state,
        isOpen: action.openValue,
      };
    default: return state;
  }
};

export default navbarReducer;
