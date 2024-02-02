import { combineReducers, legacy_createStore } from "redux";

let redusers = combineReducers({
    contentPage: contentReducer,
    messagePage: messageReducer,
    
});

let store = legacy_createStore(redusers)
export default store;