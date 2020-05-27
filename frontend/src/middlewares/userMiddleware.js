import axios from 'axios';
import { GET_TOKEN } from '../action/userActions';


const userMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_TOKEN:
      axios

      next(action);
      break;
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }

 
};

export default userMiddleware;
