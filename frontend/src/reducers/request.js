import {
  SAVE_REQUEST,
  CHANGE_FIELD_REQUEST,
  CHANGE_FIELD_DATE_REQUEST,
  CHANGE_FIELD_HOUR_REQUEST,
  SAVE_NEW_REQUEST,
  GET_COMMENT_ID,
  CHANGE_FIELD_COMMENT,
  CHANGE_RATING_COMMENT,
  SAVE_TOGGLE,
  DISPLAY_HOUR,
} from '../action/requestAction';

const initialState = {
  requestList: [],
  currentSkill: null,
  requestBody: '',
  requestDate: '',
  requestHour: '',
  commentBody: '',
  newRate: '',
  commentId: '',
  toggle: true,
  hour: ''

};

const requestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REQUEST:
      return {
        ...state,
        requestList: action.newRequest,
      };
    case SAVE_TOGGLE:
      return {
        ...state,
        toggle: action.newToggle,
      };
    case CHANGE_FIELD_REQUEST:
      return {
        ...state,
        [action.inputName]: action.newValue,
      };
    case CHANGE_FIELD_DATE_REQUEST:
      return {
        ...state,
        requestDate: action.newDate,
      };
    case CHANGE_FIELD_HOUR_REQUEST:
      return {
        ...state,
        requestHour: action.newHour,
      };
    case SAVE_NEW_REQUEST:
      return {
        ...state,
      };
    case DISPLAY_HOUR:
      return {
        ...state,
        hour: action.initialHour,
      };

      // =====================================COMMENT

    case GET_COMMENT_ID:
      return {
        ...state,
        commentId: action.commentId,
      };

    case CHANGE_FIELD_COMMENT:
      return {
        ...state,
        commentBody: action.newValue,
      };


    case CHANGE_RATING_COMMENT:
      return {
        ...state,
        newRate: action.newRate,
      };

    default: return state;
  }
};

export default requestReducer;
