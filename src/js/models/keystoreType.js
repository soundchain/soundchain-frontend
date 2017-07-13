import { attr, Model } from 'redux-orm';
import { 
  CREATE_KEYSTORE_TYPE,
  DELETE_KEYSTORE_TYPE,
} from '~/constants';

export default class KeystoreType extends Model {
  static modelName = 'KeystoreType';

  static fields = {
    id: attr(),
    name: attr(),
    description: attr(),
    icon: attr(),
  };

  static reducer(action, model) {
    const { type, payload } = action;

    switch (type) {
      case CREATE_KEYSTORE_TYPE:
        return model.create(payload);

      case DELETE_KEYSTORE_TYPE:
        return model.withId(payload).delete();
    }
  }
}
