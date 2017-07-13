import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import history from '~/store/history';

const middlewares = [
  routerMiddleware(history),
  thunkMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger'); // eslint-disable-line
  middlewares.push(createLogger({ collapsed: true }));
}

export default middlewares;
