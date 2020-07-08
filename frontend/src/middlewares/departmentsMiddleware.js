import axios from 'axios';
import { GET_ALL_DEPARTMENTS, saveDepartments } from '../action/departmentsActions';

const departmentsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_ALL_DEPARTMENTS:
      axios.get('http://api.friendlyjob.fr/api/v1/department')
        .then((response) => {
        // console.log(response);
        // je voudrais enregistrer response.data dans le state => nouvelle action
        // console.log(response);
          store.dispatch(saveDepartments(response.data));
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

export default departmentsMiddleware;
