import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer ';
import usersReducer from './users-reducer';
import goodsReducer from './goods-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  goodsPage: goodsReducer
});

let store = legacy_createStore(reducers);

export default store;
