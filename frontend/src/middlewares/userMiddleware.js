import axios from 'axios';


const userMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
};

export default userMiddleware;
