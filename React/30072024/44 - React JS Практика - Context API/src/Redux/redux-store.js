import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer ';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = legacy_createStore(reducers);

export default store;
