import axios from 'axios';
import { GET_TOKEN } from '../action/userActions';


const userMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_TOKEN:
    axios({
      method: 'post',
      url: '',
      data: {
        "username":"admin.jolan@oclock.io",
        "password":"AdminFJ137313"
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.info.favorites);
        store.dispatch(logUser(response.data.info));
      })
      .catch(function(error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
      .finally(() => {
      });
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default userMiddleware;
