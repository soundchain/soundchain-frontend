import { 
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
} from '~/constants';

export const createAddress = props => ({
  type: CREATE_ADDRESS,
  payload: props,
});

export const updateAddress = props => ({
  type: UPDATE_ADDRESS,
  payload: props,
});

export const deleteAddress = id => ({
  type: DELETE_ADDRESS,
  payload: id,
});
