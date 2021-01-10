import {BookViewTypes} from "../types";
import BookService from "../../utils/bookService";


export const findBookById = (id) => {
    return dispatch => {
        dispatch({type:BookViewTypes.findById});

        BookService.findBookById(id).then(book => {
            dispatch({
                type:BookViewTypes.findSuccess,
                payload:book
            })
        }).catch(error => {
            dispatch({
                type:BookViewTypes.findError,
                payload:error.message
            })
        });
    }
};
