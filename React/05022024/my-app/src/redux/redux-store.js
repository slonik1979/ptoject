import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import productsReducer from './products-reducer';
import usersReducer from './users-reducer';
import { setAuthUserData } from './auth-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  productsPage: productsReducer,
  usersPage: usersReducer,
  auth: setAuthUserData,
});

let store = legacy_createStore(reducers);

export default store;
