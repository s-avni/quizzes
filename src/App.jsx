import './App.css';
import React from 'react';
import {quiz1} from "./data/quiz1";
import {quiz2} from "./data/quiz2";
import {quiz3} from "./data/quiz3";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Quiz} from "./Quiz";


function App() {
    const quizes = [quiz1, quiz2, quiz3];
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <ul>
                            <li>
                                <Link to="/quiz1">Quiz 1</Link>
                            </li>
                            <li>
                                <Link to="/quiz2">Quiz 2</Link>
                            </li>
                            <li>
                                <Link to="/quiz3">Quiz 3</Link>
                            </li>
                        </ul>
                    </Route>
                    <Route exact path="/quiz1">
                        <Quiz/>
                    </Route>
                    <Route path="/quiz2">
                        <Quiz/>
                    </Route>
                    <Route path="/quiz3">
                        <Quiz/>
                    </Route>
                </Switch>
        </Router>
    );
}

export default App;
