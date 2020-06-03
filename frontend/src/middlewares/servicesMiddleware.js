import axios from 'axios';
import { GET_SERVICES, saveServices } from 'src/action/servicesActions';


const servicesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_SERVICES:
      axios.get('http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/services')
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
        // console.log(response);
          store.dispatch(saveServices(response.data));
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

export default servicesMiddleware;
