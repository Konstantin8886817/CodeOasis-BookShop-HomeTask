import {Link} from "react-router-dom";
import classes from "./BookList.module.css";

const BookList = ({books}) => {
    return (
        <div className={classes.BookList}>{books.map(book => <div key={book.id} className={classes.BooksListItem}>
            <Link to={`book/${book.id}`}><img src={book.thumbnailUrl} alt=""/></Link>
        </div>)}</div>
    )
}

export default BookList;
