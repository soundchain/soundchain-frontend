import { fk, many, attr, Model } from 'redux-orm';
import { 
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
} from '~/constants';

import { DEFAULT_SESSION_ID } from '~/constants/Common';

export default class Address extends Model {
  static modelName = 'Address';

  static fields = {
    name: attr(),
    address: attr(),
    networks: many('Network', 'addresses'),
    tokens: many('Token', 'addresses'),
    keystore: fk('Keystore', 'addresses'),
  };

  static options = {
    idAttribute: 'address',
  };

  static reducer(action, model) {
    const { type, payload } = action;

    switch (type) {
      case CREATE_ADDRESS:
        const newAddress = model.create(payload);
        // set the default address
        if (model.all().count() === 1) {
          newAddress.sessionSet.modelClass.withId(DEFAULT_SESSION_ID).update({ defaultAddress: newAddress.address });
        }
        return;

      case UPDATE_ADDRESS:
        const address = model.withId(payload.address);
        // TODO why can't redux-orm figure this out?
        address.tokens.clear();
        address.networks.clear();
        address.update(payload);
        return;

      case DELETE_ADDRESS:
        return model.withId(payload).delete();
    }
  }
}
