// import mandatory for store
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


// we need to import middleware
import servicesMiddleware from 'src/middlewares/servicesMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';
import inscriptionMiddlware from 'src/middlewares/inscriptionMiddleware';
import requestMiddlware from 'src/middlewares/requestMiddleware';
import departmentsMiddlewares from 'src/middlewares/departmentsMiddleware';
// import RootReducer
import reducer from 'src/reducers';

// combine devtools and middleware
const enhancers = composeWithDevTools(
  applyMiddleware(
    servicesMiddleware,
    userMiddleware,
    inscriptionMiddlware,
    requestMiddlware,
    departmentsMiddlewares,
    // add middleware
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
