import classes from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div className={classes.LoginPage}>
            <h2>Authentication</h2>
            <input type="text" placeholder='Type email'/>
            <input type="password" placeholder='Type password'/>
            <div>
                <button>Login</button>
                <button>Registration</button>
            </div>
        </div>
    )
}

export default LoginPage;
