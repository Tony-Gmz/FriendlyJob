import axios from 'axios';
import { GET_REQUEST, saveRequest } from '../action/requestAction';

const requestMiddleware = (store) => (next) => (action) => {
   console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_REQUEST:
      axios.get('http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/user/{ id })
        .then((response) => {
         console.log(response);
          store.dispatch(saveRequest(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;


    default:
    // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default requestMiddleware;
