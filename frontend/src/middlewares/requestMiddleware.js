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
  saveToggle,
  isCommentSend,
  isRequestRefuse,
  SUBMIT_FINISH_REQUEST,
  submitComment,
  errorMesssageReservation,
} from '../action/requestAction';

const requestMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_REQUEST: {
      const userToken = localStorage.getItem('jwtToken');
      axios.get(`http://api.friendlyjob.fr/api/v1/demands/users`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveRequest(response.data));
          // console.log(response);
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
      const userToken = localStorage.getItem('jwtToken');
      // console.log(`${currentSkill}, ${requestBody}, ${requestDate}, ${requestHour}, ${currentJobWorkerId},${FriendlyJoberId}`);

      axios({
        method: 'post',
        url: 'http://api.friendlyjob.fr/api/v1/demands',
        data: {
          body: requestBody,
          reservationDate: requestDate,
          reservationHour: requestHour,
          service: currentSkill,
          jobWorker: currentJobWorkerId,
          status: 'En attente',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveNewRequest(response.data));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(errorMesssageReservation());
        });
      next(action);
      break;
    }

    case SUBMIT_COMMENT: {
      const { commentBody, newRate } = store.getState().request;
      const { requestId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');
      const { toggle } = store.getState().request;

      axios({
        method: 'post',
        url: 'http://api.friendlyjob.fr/api/v1/ratings',
        data: {
          comment: commentBody,
          star: newRate,
          demand: requestId,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          store.dispatch(isCommentSend());
          // console.log(response);
        })
        .catch((error) => {
          console.warn(error);
          // console.log(error.response.data);
        });
      next(action);
      break;
    }

    case SUBMIT_SET_REQUEST: {
      const { requestId, requestBody, requestDate, requestHour } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');
      const { toggle } = store.getState().request;
      axios({
        method: 'put',
        url: `http://api.friendlyjob.fr/api/v1/demands/${requestId}`,
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
          store.dispatch(saveToggle(!toggle));
          // console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_CANCEL_REQUEST: {
      const { requestId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');
      const { toggle } = store.getState().request;
      axios({
        method: 'put',
        url: `http://api.friendlyjob.fr/api/v1/demands/${requestId}`,
        data: {
          body: 'Ce service à été annulée',
          status: 'Annulée',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          // console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_FINISH_REQUEST: {
      const { requestId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');
      const { toggle } = store.getState().request;
      axios({
        method: 'put',
        url: `http://api.friendlyjob.fr/api/v1/demands/${requestId}`,
        data: {
          status: 'terminée',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          // console.log(response);
        })
        .catch((error) => {
          console.warn(error);
          // console.log(error.response);
        });
      next(action);
      break;
    }

    case SUBMIT_REFUSE_REQUEST: {
      const { requestId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');
      const { toggle } = store.getState().request;
      axios({
        method: 'put',
        url: `http://api.friendlyjob.fr/api/v1/demands/${requestId}`,
        data: {
          body: 'Ce service à été refusée',
          status: 'Refusée',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          store.dispatch(isRequestRefuse());
          // console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_ACCEPTE_REQUEST: {
      const { requestId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');
      const { toggle } = store.getState().request;
      axios({
        method: 'put',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/${requestId}`,
        data: {
          status: 'Acceptée',
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          // console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case SUBMIT_DELETE_REQUEST: {
      const { requestId } = store.getState().request;
      const userToken = localStorage.getItem('jwtToken');
      const { toggle } = store.getState().request;
      axios({
        method: 'delete',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/demands/',
        data: {
          id: requestId,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          // console.log(response);
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
