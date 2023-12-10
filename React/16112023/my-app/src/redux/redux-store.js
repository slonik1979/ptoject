import { combineReducers, legacy_createStore } from 'redux';
import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';

let reducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
});

let store = legacy_createStore(reducer);

export default store;
