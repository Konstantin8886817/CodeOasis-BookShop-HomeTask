import {MainPageTypes} from "../types";
import createReducer from "../createReducer";

const initState = {
    books: [],
    error: false,
    pending: false
}

export default createReducer(initState,{
    [MainPageTypes.loadBooks]:() => ({
        ...initState,
        pending: true
    }),
    [MainPageTypes.success]:(state,{payload}) => ({
        books: payload,
        pending: false
    }),
    [MainPageTypes.error]:(state,{error}) => ({
        pending: false,
        error
    }),
});
