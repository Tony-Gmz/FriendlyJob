import { combineReducers } from 'redux';

// Reducer import
import userReducer from './user';
import servicesReducer from './services';
import inscriptionReducer from './inscription';


const rootReducer = combineReducers({

  service: servicesReducer,
  user: userReducer,
  inscription: inscriptionReducer,
});


export default rootReducer;
