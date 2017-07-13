import Deferred from 'es6-deferred';

import { 
  CREATE_DEFAULT_SESSION,
  UPDATE_SESSION,
} from '~/constants';

export const createDefaultSession = () => ({
  type: CREATE_DEFAULT_SESSION,
});

export const updateSession = payload => ({
  type: UPDATE_SESSION,
  payload,
});

// signing modal

let signingDeferred;

export function showTxSigningModal(payload) {
  return (dispatch) => {
    if (signingDeferred && signingDeferred.pending) return new Error('Already Signing a Transaction');
    dispatch({ type: UPDATE_SESSION, payload: { signingModalData: payload } });
    signingDeferred = new Deferred();
    signingDeferred.pending = true;
    return signingDeferred;
  };
}

export function hideTxSigningModal(payload) {
  // TODO, unlock the account with the specific keystore
  return (dispatch) => {
    // or reject it...
    dispatch({ type: UPDATE_SESSION, payload: { signingModalData: undefined } });
    signingDeferred.pending = false;
    if (payload.error) return signingDeferred.reject(payload.error);
    return signingDeferred.resolve(payload);
  };
}
