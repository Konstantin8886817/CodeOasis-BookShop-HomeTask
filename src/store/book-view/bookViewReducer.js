import {BookViewTypes} from "../types";
import createReducer from "../createReducer";


const initState = {
    book:null,
    error: null,
    pending: false
}


export default createReducer(initState,{
    [BookViewTypes.findById]:() => ({
        ...initState,
        pending: true
    }),
    [BookViewTypes.findSuccess]:(state,{payload}) => {
        return ({
            book: payload,
            pending: false
        })
    },
    [BookViewTypes.findError]:(state,{payload}) => ({
        pending: false,
        book: null,
        error: payload
    }),
});
