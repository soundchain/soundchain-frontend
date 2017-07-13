import uuid from 'uuid';
import { attr, oneToOne, Model } from 'redux-orm';
import { 
  CREATE_KEYSTORE,
  UPDATE_KEYSTORE,
  DELETE_KEYSTORE,
} from '~/constants';

export default class Keystore extends Model {
  static modelName = 'Keystore';

  static fields = {
    id: attr({ getDefault: () => uuid() }),
    data: attr(),
    type: oneToOne('KeystoreType'),
  }

  static reducer(action, model) {
    const { type, payload } = action;

    switch (type) {
      case CREATE_KEYSTORE:
        return model.create(payload);

      case UPDATE_KEYSTORE:
        return model.withId(payload.id).update(payload);

      case DELETE_KEYSTORE:
        model.withId(payload).addresses.all().toModelArray().forEach(address => address.delete());
        return model.withId(payload).delete();
    }
  }
}
