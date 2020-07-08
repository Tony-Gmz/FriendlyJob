import { combineReducers } from 'redux';

// Reducer import
import userReducer from './user';
import servicesReducer from './services';
import inscriptionReducer from './inscription';
import requestReducer from './request';
import departmentsReducer from './departments';
import navbarReducer from './navbar';


const rootReducer = combineReducers({
  request: requestReducer,
  service: servicesReducer,
  user: userReducer,
  inscription: inscriptionReducer,
  departments: departmentsReducer,
  navbar: navbarReducer,
});


export default rootReducer;
