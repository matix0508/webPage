import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            darkMode: true,
            lang: "en",
        };
        this.toggle_dark_mode = this.toggle_dark_mode.bind(this);
        this.toggle_language = this.toggle_language.bind(this);
        this.initialState = this.initialState.bind(this);
        this.saveDarkMode = this.saveDarkMode.bind(this);
        this.saveLanguage = this.saveLanguage.bind(this);
    }

    toggle_dark_mode() {
        this.setState({darkMode: !this.state.darkMode});
    }

    toggle_language() {
        this.setState({lang: this.state.lang === "en" ? "pl" : "en"})
    }

    saveDarkMode() {
        localStorage.setItem("darkMode", this.state.darkMode ? "1" : "0");
    }

    saveLanguage() {
        localStorage.setItem("lang", this.state.lang);
    }

    initialState() {
        this.setState({
            darkMode: localStorage.getItem("darkMode") === "1",
            lang: localStorage.getItem("lang")
        })
    }

    componentDidMount() {
        this.initialState();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.darkMode !== this.state.darkMode) {
            this.saveDarkMode();
        }
        if (prevState.lang !== this.state.lang) {
            this.saveLanguage();
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
                            onSwitchLang={() => this.toggle_language()}
                        />
                    </Route>
                    <Route path={"/resume"}>
                        <Resume
                            darkMode={this.state.darkMode}
                            onSwitchMode={() => this.toggle_dark_mode()}
                            lang={this.state.lang}
                            onSwitchLang={() => this.toggle_language()}
                        />
                    </Route>
                    <Route path={"/contact"}>
                        <Contact
                            darkMode={this.state.darkMode}
                            onSwitchMode={() => this.toggle_dark_mode()}
                            lang={this.state.lang}
                            onSwitchLang={() => this.toggle_language()}
                        />

                    </Route>
                    <Route path={"/projects"}>
                        <Projects
                            darkMode={this.state.darkMode}
                            onSwitchMode={() => this.toggle_dark_mode()}
                            lang={this.state.lang}
                            onSwitchLang={() => this.toggle_language()}
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