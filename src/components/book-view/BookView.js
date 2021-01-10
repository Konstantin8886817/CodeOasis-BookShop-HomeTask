import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {useEffect} from "react";
import {withRouter} from "react-router-dom";
import classes from "./BookView.module.css";
import {findBookById} from "../../store/book-view/bookViewActions";
import Loader from "../loader/Loader";


const BookView = ({pending,error,book,match,findById}) => {

    useEffect(() => {
        findById(parseInt(match.params.id));
    },[match.params.id,findById]);

    return (
        <div>
            {pending && <Loader/>}
            {!pending && error && <h2 className={classes.Error}>{error}</h2>}
            {!pending && book && <div className={classes.BookView}>
                <div className={classes.BookImg}><img src={book.thumbnailUrl} alt=""/></div>
                <div className={classes.BookContent}>
                    <h2>{book.title}</h2>
                    <p>{book.longDescription}</p>
                </div>
            </div>}
        </div>
    )
}


const mapStateToProps = ({bookView}) => {
    return ({
        pending: bookView.pending,
        book: bookView.book,
        error:bookView.error
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({findById:findBookById},dispatch)
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookView));
