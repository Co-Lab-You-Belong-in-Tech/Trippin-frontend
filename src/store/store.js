import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from "./reducer";




const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || "") : null;

const middleware = [thunk]

const initialState = {
    authLogin: {userInfo: userInfoFromLocalStorage}
}
// const composedEnhancer = compose(applyMiddleware(...middleware), devToolsEnhancer({trace: true}))

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

