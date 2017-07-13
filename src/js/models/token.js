import { attr, fk, Model } from 'redux-orm';
import { 
  CREATE_TOKEN,
  UPDATE_TOKEN,
  DELETE_TOKEN,
} from '~/constants';

export default class Token extends Model {
  static modelName = 'Token';

  static fields = {
    id: attr(),
    decimals: attr({ getDefault: () => 18 }),
    address: attr(),
    network: fk('Network', 'tokens'),
    // TODO
    // type: fk('TokenType'),
  }

  static reducer(action, model) {
    const { type, payload } = action;

    switch (type) {
      case CREATE_TOKEN:
        return model.create({
          ...payload,
          id: `${payload.network}_${payload.address.toLowerCase()}`,
        });

      case UPDATE_TOKEN:
        return model.withId(payload.id).update(payload);

      case DELETE_TOKEN:
        return model.withId(payload).delete();
    }
  }
}
