import { attr, Model } from 'redux-orm';
import { 
  CREATE_NETWORK,
  UPDATE_NETWORK,
  DELETE_NETWORK,
} from '~/constants';

export default class Network extends Model {
  static modelName = 'Network';

  static fields = {
    id: attr(),
    name: attr(),
    symbol: attr(),
    description: attr(),
    provider: attr(),
    color: attr(),
    default: attr(),
    networkId: attr(),
    explorerAddressPrefix: attr(),
    explorerTransactionPrefix: attr(),
    // TODO images
  }

  static reducer(action, model) {
    const { type, payload } = action;

    switch (type) {
      case CREATE_NETWORK:
        return model.create(payload);

      case UPDATE_NETWORK:
        return model.withId(payload.id).update(payload);

      case DELETE_NETWORK:
        return model.withId(payload).delete();
    }
  }
}
