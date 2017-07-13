import { validateProps } from '~/helpers/validation';

// web3-redux hooks
import { sync } from '~/helpers/web3';
import { removeNetwork } from 'web3-redux/src/actions';

import { 
  CREATE_NETWORK,
  UPDATE_NETWORK,
  DELETE_NETWORK,
} from '~/constants';

const requiredProps = {
  name: true,
  symbol: true,
  description: true,
  provider: true,
  id: true,
  color: true,
  enabled: true,
  chainId: true,
};

function dispatchAndSync(action) {
  return (dispatch, getState) => {
    dispatch(action);
    sync({ dispatch, getState }, action.payload);
  };
}

export const createNetwork = (payload) => {
  validateProps(requiredProps, payload);
  return dispatchAndSync({ type: CREATE_NETWORK, payload });
};

export const updateNetwork = (payload) => {
  validateProps(requiredProps, payload);
  return dispatchAndSync({ type: UPDATE_NETWORK, payload });
};

export const deleteNetwork = payload => (dispatch) => {
  dispatch(removeNetwork({ networkId: payload }));
  dispatch({ type: DELETE_NETWORK, payload });
};
