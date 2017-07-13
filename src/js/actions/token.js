import { validateProps } from '~/helpers/validation';

import { 
  CREATE_TOKEN,
  UPDATE_TOKEN,
  DELETE_TOKEN,
} from '~/constants';

const requiredProps = {
  address: 'address',
  color: true,
  decimals: 'number',
  name: true,
  network: true,
  symbol: true,
};

export const createToken = (payload) => {
  validateProps(requiredProps, payload);
  return {
    type: CREATE_TOKEN,
    payload,
  };
};

export const updateToken = (payload) => {
  validateProps(requiredProps, payload);
  return {
    type: UPDATE_TOKEN,
    payload,
  };
};

export const deleteToken = payload => ({
  type: DELETE_TOKEN,
  payload,
});
