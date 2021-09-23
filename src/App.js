import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./theme.scss";
import "./App.scss";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="content-container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
