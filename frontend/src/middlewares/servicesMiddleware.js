import axios from 'axios';
import {GET_SERVICES} from 'src/action/servicesActions';

const servicesMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_SERVICES:
    console.log('coucou je suis get_service');
    
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default servicesMiddleware;
