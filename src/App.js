import {Route, Switch} from "react-router-dom";
import './App.css';
import Nav from "./components/nav/Nav";
import MainPage from "./components/main-page/MainPage";
import LoginPage from "./components/login-page/LoginPage";
import BookView from "./components/book-view/BookView";

const App = () => {

    return (
        <div className='App'>
            <Nav/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/login"  component={LoginPage}/>
                <Route path="/book/:id"  component={BookView}/>
            </Switch>
        </div>
  );
}

export default App;
