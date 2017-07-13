import { getKeystoreAction } from '~/keystoreTypes';

import { 
  DELETE_KEYSTORE,
} from '~/constants';

export const createKeystore = props =>
  getKeystoreAction({ id: props.type, type: 'create' })(props);

export const updateKeystore = (props, data) =>
  getKeystoreAction({ id: data.type.id, type: 'update' })(props, data);

export const deleteKeystore = payload => ({
  type: DELETE_KEYSTORE, payload,
});