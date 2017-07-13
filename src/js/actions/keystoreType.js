import { 
  CREATE_KEYSTORE_TYPE,
  DELETE_KEYSTORE_TYPE,
} from '~/constants';

export const createKeystoreType = props => ({
  type: CREATE_KEYSTORE_TYPE,
  payload: props,
});

export const deleteKeystoreType = id => ({
  type: DELETE_KEYSTORE_TYPE,
  payload: id,
});
