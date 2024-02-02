import { combineReducers, legacy_createStore } from 'redux';
import contentReducer from './content-reducer';
import messageReducer from './message-reducer ';

let redusers = combineReducers({
  contentPage: contentReducer,
  messagePage: messageReducer,
});

let store = legacy_createStore(redusers);
export default store;
