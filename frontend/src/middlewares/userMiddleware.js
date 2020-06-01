import axios from 'axios';
import { changeTitle, capitalize } from 'src/utils';
import {
  GET_RANDOM_JOBWORKER,
  saveRandomJobWorker,
  SUBMIT_LOGIN,
  saveUser,
  GET_SIX_RANDOM_JOBWORKER,
  saveSixJobWorker,
  hideLoader,
  GET_JOBWORKER,
  saveJobWorker,
  GET_USER_DATA,
} from '../action/usersActions';
import { saveRequest } from '../action/requestAction';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_RANDOM_JOBWORKER:
      // console.log('coucou je suis get_random_jobworker');
      axios.get('http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/jobworker/random')
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          // console.log(response);
          store.dispatch(saveRandomJobWorker(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      console.log(email);
      console.log(password);
      axios({
        method: 'post',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/login_check',
        data: {
          username: email,
          password,
        },
      })
        .then((response) => {
        console.log(response);
        // je voudrais enregistrer response.data dans le state => nouvelle action
        // console.log(response);
          console.log(response);
          store.dispatch(saveUser(response.data.user));
          window.localStorage.setItem('jwtToken', response.data.token);
          window.localStorage.setItem('userId', response.data.user.id);
        })
        .catch((error) => {
          console.warn(error);
        })
      next(action);
      break;
    }
    case GET_USER_DATA: {
      const userId = localStorage.getItem('userId');
      const userToken = localStorage.getItem('jwtToken');
      axios({
        method: 'get',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/${userId}`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(saveUser(response.data.user));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
      next(action);
      break;

    }

    case GET_SIX_RANDOM_JOBWORKER: {
      const { serviceName, serviceList } = store.getState().service;
      console.log(serviceName);
      // console.log(changeTitle(serviceName));
      console.log(serviceList);
      const findService = serviceList.find(service => service.title === capitalize(changeTitle(serviceName)));
      console.log(findService);
      const serviceId = Number(findService.id);
      console.log(serviceId);

      axios.get(`http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/services/${serviceId}/jobworker?limit=6`)
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(saveSixJobWorker(response.data[0].skills));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        })
        .finally(() => {
          store.dispatch(hideLoader());
        });
      next(action);
      break;
    }
    case GET_JOBWORKER: {
      const { serviceName, serviceList } = store.getState().service;
      console.log(serviceName);
      // console.log(changeTitle(serviceName));
      console.log(serviceList);
      const findService = serviceList.find(service => service.title === capitalize(changeTitle(serviceName)));
      console.log(findService);
      const serviceId = Number(findService.id);
      console.log(serviceId);

      axios.get(`http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/services/${serviceId}/jobworker`)
      .then((response) => {
        // console.log(response);
        // je voudrais enregistrer response.data dans le state => nouvelle action
        console.log(response);
        store.dispatch(saveJobWorker(response.data[0].skills));
      })
      .catch((error) => {
        console.warn(error);
        console.log('jai fait une erreur');
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

export default userMiddleware;
