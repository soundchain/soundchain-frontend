import { init as initWeb3 } from '~/helpers/web3';
import { 
  createDefaultSession,
  createKeystoreType,
  createNetwork, deleteNetwork,
  createToken, deleteToken,
  updateAddress,
} from '~/actions/session';
import { 
  DEFAULT_KEYSTORE_TYPES, 
  DEFAULT_NETWORKS, 
  DEFAULT_TOKENS 
} from '~/constants/Common';

export const seedStore = (store) => {
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