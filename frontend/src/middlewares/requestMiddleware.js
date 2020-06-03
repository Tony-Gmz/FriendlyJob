import axios from 'axios';
import {
  GET_REQUEST,
  saveRequest,
  SUBMIT_REQUEST,
  saveNewRequest,
  SUBMIT_COMMENT,
  SUBMIT_CANCEL_REQUEST,
  SUBMIT_REFUSE_REQUEST,
  SUBMIT_ACCEPTE_REQUEST,
  SUBMIT_DELETE_REQUEST,
  SUBMIT_SET_REQUEST,
} from '../action/requestAction';

const requestMiddleware = (store) => (next) => (action) => {
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
      // console.log(`${currentSkill}, ${requestBody}, ${requestDate}, ${requestHour}, ${currentJobWorkerId},${FriendlyJoberId}`);

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

    case SUBMIT_COMMENT: {
      const { commentBody, newRate } = store.getState().request;
      const { commentId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');

      axios({
        method: 'post',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/ratings',
        data: {
          comment: commentBody,
          star: newRate,
          demand: commentId,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_SET_REQUEST: {
      const { commentId, requestBody, requestDate, requestHour } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');

      axios({
        method: 'put',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/${commentId}`,
        data: {
          body: requestBody,
          reservationDate: requestDate,
          reservationHour: requestHour,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_CANCEL_REQUEST: {
      const { commentId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');

      axios({
        method: 'put',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/${commentId}`,
        data: {
          body: 'Ce service à été annulé',
          status: 'Annulé',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_REFUSE_REQUEST: {
      const { commentId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');

      axios({
        method: 'put',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/${commentId}`,
        data: {
          body: 'Ce service à été refusé',
          status: 'Refusé',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_ACCEPTE_REQUEST: {
      const { commentId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');

      axios({
        method: 'put',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/${commentId}`,
        data: {
          status: 'Accepté',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_DELETE_REQUEST: {
      const { commentId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');

      axios({
        method: 'delete',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/',
        data: {
          id: commentId,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          console.log(response);
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
