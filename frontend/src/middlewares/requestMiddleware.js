import axios from 'axios';
import { GET_REQUEST, saveRequest, SUBMIT_REQUEST, saveNewRequest } from '../action/requestAction';

const requestMiddleware = (store) => (next) => (action) => {
   //console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_REQUEST: {
      const userId = localStorage.getItem('userId');
      const userToken = localStorage.getItem('jwtToken');
      axios.get(`http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveRequest(response.data));
        })
        .catch((error) => {
          console.warn(error);
        }); 
      next(action);
      break;
    }
    case SUBMIT_REQUEST: {
      const { currentSkill, requestBody, requestDate, requestHour } = store.getState().request;
      const { currentJobWorkerId } = store.getState().user;
      const FriendlyJoberId = localStorage.getItem('userId');
      const userToken = localStorage.getItem('jwtToken');
      console.log(`${currentSkill}, ${requestBody}, ${requestDate}, ${requestHour}, ${currentJobWorkerId},${FriendlyJoberId}`);

      axios({
        method: 'post',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands',
        data: {
          body: requestBody,
          reservationDate: requestDate,
          reservationHour: requestHour,
          service: currentSkill,
          friendlyUser: FriendlyJoberId,
          jobWorker: currentJobWorkerId,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveNewRequest(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    }
    default:
    // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default requestMiddleware;
