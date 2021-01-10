import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import mainPageReducer from "./main-page/mainPageReducer";
import bookViewReducer from "./book-view/bookViewReducer";


export const store =  createStore(
    combineReducers({
        mainPage: mainPageReducer,
        bookView: bookViewReducer
    }),
    applyMiddleware(thunk)
);
