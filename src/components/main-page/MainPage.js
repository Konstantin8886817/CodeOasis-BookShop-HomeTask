import {bindActionCreators} from "redux";
import {loadBooks} from "../../store/main-page/mainPageActions";
import {connect} from "react-redux";
import {useEffect} from "react";
import classes from "./MainPage.module.css";
import Loader from "../loader/Loader";
import BookList from "../book-list/BookList";


const MainPage = ({pending,books,error,loadBooks}) =>{
    useEffect(() => {
        loadBooks();
    },[loadBooks]);

    return (
        <div className={classes.MainPage}>
            {pending && <Loader/>}
            {!pending && <BookList books={books}/>}
        </div>
    )
}

const mapStateToProps = ({mainPage}) => ({
    pending: mainPage.pending,
    books: mainPage.books,
    error:mainPage.error
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadBooks:loadBooks},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
