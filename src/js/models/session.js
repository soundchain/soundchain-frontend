import { attr, fk, Model } from 'redux-orm';
import { 
  CREATE_DEFAULT_SESSION,
  UPDATE_SESSION
} from '~/constants';

import { DEFAULT_SESSION_ID } from '~/constants/Common';

export default class Session extends Model {
  static modelName = 'Session';

  static fields = {
    id: attr(),
    signingModalData: attr(),
    defaultAddress: fk('Address'),
  }

  static reducer(action, model) {
    const { type, payload } = action;

    switch (type) {
      case CREATE_DEFAULT_SESSION:
        return model.create({ id: DEFAULT_SESSION_ID });

      case UPDATE_SESSION:
        return model.withId(DEFAULT_SESSION_ID).update(payload);
    }
  }
}
