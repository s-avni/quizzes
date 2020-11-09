import './App.css';
import React from 'react';
import {quizzes} from "./data";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Quiz} from "./Quiz";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <><p>Onboarding Quizzes</p>
                        <ul>
                            {quizzes.map((quiz) =>
                                <li key={quiz.path}>
                                    <Link to={quiz.path}>{quiz.quizIntro.title}</Link>
                                </li>
                            )}
                        </ul>
                    </>
                </Route>
                {quizzes.map((quiz) =>
                    <Route exact path={quiz.path}>
                        <Quiz quiz={quiz}/>
                    </Route>
                )}
            </Switch>
        </Router>
    );
}

export default App;
