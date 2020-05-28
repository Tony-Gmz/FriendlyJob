import axios from 'axios';
import { GET_RANDOM_JOBWORKER,
  saveRandomJobWorker,
  SUBMIT_LOGIN,
  saveUser } from '../action/usersActions';


const userMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_RANDOM_JOBWORKER:
      console.log('coucou je suis get_random_jobworker');
      axios.get('http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/jobworker/random')
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(saveRandomJobWorker(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case SUBMIT_LOGIN: {

      const {email, password } = store.getState().user;
      console.log(email);
      console.log(password);
      axios({
        method: 'post',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/login_check',
        data: {
          username: email,
          password: password
        },
      })
        .then((response) => {
        // console.log(response);
        // je voudrais enregistrer response.data dans le state => nouvelle action
        // console.log(response);
          console.log(response);
          store.dispatch(saveUser(response.data.user.isLogged, response.data.user));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally((response) => {
          localStorage.setItem('jwt-token', response.data.token);
        });
      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default userMiddleware;
