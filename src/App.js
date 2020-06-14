import React from "react";
import { HeaderNavbar } from "./components";
import HomePage from "./routes/HomePage";
import NewsPage from "./routes/NewsPage";
import PreventionPage from "./routes/PreventionPage";
import AboutPage from "./routes/AboutPage";
import PageNotFound404 from "./routes/PageNotFound404";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="desktop">
                    <div className="wholePage">
                        <div className="page-header">
                            <Route exact path={["/", "/news", "/Prevention", "/about"]} component={HeaderNavbar}></Route>
                        </div>
                        <div className="page-content">
                            <Switch>
                                <Route exact path="/" component={HomePage}></Route>
                                <Route exact path="/news" component={NewsPage}></Route>
                                <Route exact path="/Prevention" component={PreventionPage}></Route>
                                <Route exact path="/about" component={AboutPage}></Route>
                                <Route component={PageNotFound404}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;