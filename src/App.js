import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./theme.scss";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import DashboardResponsive from "./components/DashboardResponsive";
import Header from "./components/Header";

const App = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <div className="app">
            <Sidebar
                sidebarActive={sidebarActive}
                setSidebarActive={setSidebarActive}
            />
            <div className="content-container">
                <Header
                    sidebarActive={sidebarActive}
                    setSidebarActive={setSidebarActive}
                />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/mobile" component={DashboardResponsive} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
