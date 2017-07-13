import { REDUX_PREFIX } from './Common';

module.exports = { // 
  CREATE_ADDRESS: `${REDUX_PREFIX} create address`,
  UPDATE_ADDRESS: `${REDUX_PREFIX} update address`,
  DELETE_ADDRESS: `${REDUX_PREFIX} delete address`,

  CREATE_KEYSTORE: `${REDUX_PREFIX} create keystore`,
  UPDATE_KEYSTORE: `${REDUX_PREFIX} update keystore`,
  DELETE_KEYSTORE: `${REDUX_PREFIX} delete keystore`,
  ADD_ACCOUNT_TO_KEYSTORE: `${REDUX_PREFIX} add account to keystore`,
  REMOVE_ACCOUNT_FROM_KEYSTORE: `${REDUX_PREFIX} remove account from keystore`,

  CREATE_KEYSTORE_TYPE: `${REDUX_PREFIX} create keystore type`,
  DELETE_KEYSTORE_TYPE: `${REDUX_PREFIX} delete keystore type`,

  CREATE_NETWORK: `${REDUX_PREFIX} create network`,
  UPDATE_NETWORK: `${REDUX_PREFIX} update network`,
  DELETE_NETWORK: `${REDUX_PREFIX} delete network`,

  CREATE_DEFAULT_SESSION: `${REDUX_PREFIX} create default session`,
  UPDATE_SESSION: `${REDUX_PREFIX} update session`,

  CREATE_TOKEN: `${REDUX_PREFIX} create token`,
  UPDATE_TOKEN: `${REDUX_PREFIX} update token`,
  DELETE_TOKEN: `${REDUX_PREFIX} delete token`,
};