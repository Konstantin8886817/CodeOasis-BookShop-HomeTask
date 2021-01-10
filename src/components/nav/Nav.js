import classes from "./Nav.module.css";
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    const token = localStorage.getItem('token');

    return (
        <div className={classes.Nav}>
            <Link className={classes.NavTitle} to="/">Books App</Link>
            <div className={classes.NavLinks}>
                {token && <NavLink to='/my_books'>MyBooks</NavLink>}
                {!token && <NavLink to='/login'>Login</NavLink>}
                {token && <NavLink to='/logout'>Logout</NavLink>}
            </div>
        </div>
    )
}

export default Nav;
