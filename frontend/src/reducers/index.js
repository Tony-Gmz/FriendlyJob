import { combineReducers } from 'redux';

// Reducer import
import userReducer from './user';
import servicesReducer from './services';


const rootReducer = combineReducers({

  service: servicesReducer,
  user: userReducer,
});


export default rootReducer;
