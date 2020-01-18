/** @format */

import React from "react";
import "./css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import Transmonitors from "./components/Transmonitors";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Transmonitors} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
