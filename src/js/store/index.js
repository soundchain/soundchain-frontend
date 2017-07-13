/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '~/reducers';
import middlewares from '~/middlewares';
import history from './history';

import { orm } from '~/models';

import { init as initWeb3 } from '~/helpers/web3';
import { 
  createDefaultSession,
  createKeystoreType,
  createNetwork, deleteNetwork,
  createToken, deleteToken,
  updateAddress,
} from '~/actions';
import { 
  DEFAULT_KEYSTORE_TYPES, 
  DEFAULT_NETWORKS, 
  DEFAULT_TOKENS 
} from '~/constants/Common';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Below is a WIP HACK before implementing temporary persistence layer for dev mode
// toggle `persist` to disable
const persist = false;

const enhancers = persist ?
  composeEnhancers(autoRehydrate(), applyMiddleware(...middlewares)) :
  composeEnhancers(applyMiddleware(...middlewares));

const initialState = {
  //orm: orm.getEmptyState()
};
const store = createStore(reducers, initialState, enhancers);

// initialize the store
if (persist) {
  persistStore(store, {
    whitelist: ['orm'], keyPrefix: 'DIGIX_SPECTRUM_',
  }, seedStore);
} else {
  seedStore();
}

function seedStore() {
  if (store.getState().orm.Session.items.length === 0) {
    store.dispatch(createDefaultSession());
    DEFAULT_KEYSTORE_TYPES.forEach(keystoreType => store.dispatch(createKeystoreType(keystoreType)));
    DEFAULT_NETWORKS.forEach(network => store.dispatch(createNetwork(network)));
    DEFAULT_TOKENS.forEach(token => store.dispatch(createToken(token)));
  } else {
    // TODO this is for dev mode only, remove in production (as we want to keep these)
    // get the old linkages
    const addressNetworks = Object.values(store.getState().orm.AddressNetworks.itemsById).reduce((o, val) => ({
      ...o, [val.fromAddressId]: (o[val.fromAddressId] || []).concat(val.toNetworkId),
    }), {});
    console.log(addressNetworks);
    const addressTokens = Object.values(store.getState().orm.AddressTokens.itemsById).reduce((o, val) => ({
      ...o, [val.fromAddressId]: (o[val.fromAddressId] || []).concat(val.toTokenId),
    }), {});
    const addressNetworkTokens = Object.keys(addressNetworks).concat(Object.keys(addressTokens)).reduce((o, val) => ({
      ...o, [val]: { address: val, tokens: addressTokens[val] || [], networks: addressNetworks[val] || [] },
    }), {});
    store.getState().orm.Token.items.forEach(token => store.dispatch(deleteToken(token)));
    store.getState().orm.Network.items.forEach(network => store.dispatch(deleteNetwork(network)));
    DEFAULT_NETWORKS.forEach(network => store.dispatch(createNetwork(network)));
    DEFAULT_TOKENS.forEach(token => store.dispatch(createToken(token)));
    // repopuplate accounts
    Object.values(addressNetworkTokens).forEach(data => store.dispatch(updateAddress(data)));
  }
  initWeb3(store);
}

if (module.hot) {
  module.hot.accept('../reducers', () => store.replaceReducer(reducers));
}
export { store, history };

