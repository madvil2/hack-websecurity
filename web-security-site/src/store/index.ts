import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./flow/auth/reducer";

const rootReducers = combineReducers({
    auth: authReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(thunk))

// @ts-ignore
export default createStore(rootReducers, enhancer);
