import { compose, createStore, combineReducers } from 'redux';
import { messsageReduser } from './messages/reduser';
import { profileReduser } from './profile/reduser';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReduser = combineReducers({
  profile: profileReduser,
  messages: messsageReduser,
});

export type StoreState = ReturnType<typeof rootReduser>;

export const store = createStore(rootReduser, composeEnhancers());
