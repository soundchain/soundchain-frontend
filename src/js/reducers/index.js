import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as web3Redux } from 'web3-redux';
import { reducer as orm } from '~/models';

export default combineReducers({
  router,
  orm,
  web3Redux,
});
