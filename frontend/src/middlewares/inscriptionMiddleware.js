import axios from 'axios';
import { SUBMIT_SUBSCRIBE, IsSubscribe } from 'src/action/inscriptionAction';

const inscriptionMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case SUBMIT_SUBSCRIBE: {

      const { email, password, roles, nom, prenom, departement } = store.getState().inscription;
      // console.log(` j'ai submit ${email} + ${roles} + ${nom} + ${prenom} + ${departement} + ${password}`);

      axios({
        method: 'post',
        url: 'http://api.friendlyjob.fr/api/v1/users/add',
        data: {
          email: email,
          roles: [roles],
          password: password,
          firstname: prenom,
          lastname: nom,
          department: Number(departement),
        },
      })
        .then((response) => {
        // console.log(response);
        // je voudrais enregistrer response.data dans le state => nouvelle action
        // console.log(response);
          // console.log(response);
          store.dispatch(IsSubscribe());
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
        });
      next(action);
      break;
    }
    default:
    // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default inscriptionMiddleware;
