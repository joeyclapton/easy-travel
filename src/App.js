import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home/Home";
import Register from "./pages/register/Register";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/cadastro">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
