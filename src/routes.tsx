import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";

export default function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}
