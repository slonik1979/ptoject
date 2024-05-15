import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import productsReducer from './products-reducer';
import usersReducer from './users-reducer';
import { setUserData } from './auth-reducer copy';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  productsPage: productsReducer,
  usersPage: usersReducer,
  auth: setUserData,
});

let store = legacy_createStore(reducers);

export default store;
