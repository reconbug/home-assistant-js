import { Store } from 'nuclear-js';
import actionTypes from '../action-types';

class CurrentStore extends Store {
  getInitialState() {
    return true;
  }

  initialize() {
    /* eslint-disable no-use-before-define */
    this.on(actionTypes.VALID_AUTH_TOKEN, storeRememberAuth);
    /* eslint-enable no-use-before-define */
  }
}

const INSTANCE = new CurrentStore();

export default INSTANCE;

function storeRememberAuth(state, {rememberAuth}) {
  return rememberAuth;
}
