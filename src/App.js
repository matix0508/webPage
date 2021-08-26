import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            darkMode: true,
            lang: "en",
        };
        this.toggle_dark_mode = this.toggle_dark_mode.bind(this);
        this.initialDarkMode = this.initialDarkMode.bind(this)
        this.saveDarkMode = this.saveDarkMode.bind(this)
    }

    toggle_dark_mode(props) {
        this.setState({darkMode: !this.state.darkMode});
    }

    saveDarkMode() {
        localStorage.setItem("darkMode", this.state.darkMode ? "1" : "0");
    }

    initialDarkMode() {
        this.setState({darkMode: localStorage.getItem("darkMode") === "1"})
    }

    componentDidMount() {
        this.initialDarkMode();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.darkMode !== this.state.darkMode) {
            this.saveDarkMode();
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home
                            darkMode={this.state.darkMode}
                            onSwitchMode={() => this.toggle_dark_mode()}
                            lang={this.state.lang}
                        />
                    </Route>
                    <Route path={"/resume"}>
                        <Resume
                            darkMode={this.state.darkMode}
                            onSwitchMode={() => this.toggle_dark_mode()}
                            lang={this.state.lang}
                        />
                    </Route>
                    <Route path={"/contact"}>
                        <Contact
                            darkMode={this.state.darkMode}
                            onSwitchMode={() => this.toggle_dark_mode()}
                            lang={this.state.lang}
                        />

                    </Route>
                    <Route path="*">
                        <PageNotFound/>
                    </Route>


                </Switch>
            </Router>


        )
            ;
    }
}