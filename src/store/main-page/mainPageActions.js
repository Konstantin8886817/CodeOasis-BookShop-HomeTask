import {MainPageTypes} from "../types";
import BookService from "../../utils/bookService";


export const loadBooks = () => {
    return dispatch => {
        dispatch({type:MainPageTypes.loadBooks});
        BookService.getAllBooks().then(books => {
            dispatch({
                type:MainPageTypes.success,
                payload:books
            })
        }).catch(error => {
            dispatch({
                type:MainPageTypes.error,
                payload:error.message
            })
        });
    }
};
