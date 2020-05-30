import { combineReducers } from 'redux';

// Reducer import
import userReducer from './user';
import servicesReducer from './services';
import inscriptionReducer from './inscription';
import requestReducer from './request';


const rootReducer = combineReducers({
  request: requestReducer,
  service: servicesReducer,
  user: userReducer,
  inscription: inscriptionReducer,
});


export default rootReducer;
