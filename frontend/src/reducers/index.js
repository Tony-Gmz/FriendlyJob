import { combineReducers } from 'redux';

// Reducer import
import userReducer from './user';
import serviceReducer from './services';


const rootReducer = combineReducers({

  service: serviceReducer,
  user: userReducer,
});


export default rootReducer;
