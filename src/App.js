/** @format */

import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import Transmonitors from "./components/Transmonitors";

import Notfound from "./components/Notfound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Transmonitors} />
            {/* <Route component={Notfound} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
