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
  GET_REQUEST_DATE,
  GET_REQUEST_HOUR,
  IS_COMMENT_SEND,
  CLEAR_SAVE,
  IS_REQUEST_REFUSE,
  CLEAR_REFUSE,
  REQUEST_SORT_SELECTED,
  GET_REQUEST_SELECTED_NAME,
  RESET_REQUEST_SELECTED,
  RESET_REQUEST_LIST,
  ERROR_MESSAGE_RESERVATION,
} from '../action/requestAction';

const initialState = {
  requestList: [],
  currentSkill: null,
  requestBody: null,
  requestDate: '',
  requestHour: '',
  commentBody: '',
  newRate: '',
  commentId: '',
  toggle: true,
  hour: '',
  isSave: false,
  isSend: false,
  isRefuse: false,
  requestSelected: null,
  requestSelectedName: null,
  errorMessageReservation: false,
};

const requestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_REQUEST:
      return {
        ...state,
        requestList: action.newRequest,
      };

    case GET_REQUEST_SELECTED_NAME:
      return {
        ...state,
        requestSelectedName: action.newName,
      };

    case REQUEST_SORT_SELECTED:
      return {
        ...state,
        requestSelected: action.newSort,
      };

    case RESET_REQUEST_SELECTED:
      return {
        ...state,
        requestSelected: null,
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
        isSave: true,
      };
    case DISPLAY_HOUR:
      return {
        ...state,
        hour: action.initialHour,
      };
    case RESET_REQUEST_LIST:
      return {
        ...state,
        requestList: null,
      };
    case ERROR_MESSAGE_RESERVATION:
      return {
        ...state,
        errorMessageReservation: true,
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
    case GET_REQUEST_DATE:
      return {
        ...state,
        requestDate: action.reservationDate,
      };
    case GET_REQUEST_HOUR:
      return {
        ...state,
        requestHour: action.reservationHour,
      };
    case IS_COMMENT_SEND:
      return {
        ...state,
        isSend: true,
      };
    case CLEAR_SAVE:
      return {
        ...state,
        isSend: false,
      };
    case IS_REQUEST_REFUSE:
      return {
        ...state,
        isRefuse: true,
      };
    case CLEAR_REFUSE:
      return {
        ...state,
        isRefuse: false,
      };
    default: return state;
  }
};

export default requestReducer;
