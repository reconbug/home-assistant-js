import { Store, Immutable } from 'nuclear-js';
import actionTypes from '../action-types';

class NotificationStore extends Store {
  getInitialState() {
    return new Immutable.OrderedMap();
  }

  initialize() {
    /* eslint-disable no-use-before-define */
    this.on(actionTypes.NOTIFICATION_CREATED, notificationCreated);
    this.on(actionTypes.LOG_OUT, logOut);
    /* eslint-enable no-use-before-define */
  }
}

const INSTANCE = new NotificationStore();

export default INSTANCE;

function notificationCreated(state, {message}) {
  return state.set(state.size, message);
}

function logOut() {
  return INSTANCE.getInitialState();
}
