/** @format */

import React, { Component } from "react";
import "../../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navbar-items">
          <h2>TransMonitor</h2>
        </div>
        <div className="navbar-items">
          <i class="fas fa-search" />
          <span style={{ marginLeft: "1rem" }}>Search...</span>
        </div>
        <div className="navbar-items">
          <div className="navbar-items-contents">support</div>
          <div className="navbar-items-contents">FAQ</div>
          <div className="navbar-items-contents">
            <i class="far fa-bell" />
          </div>
          <div>
            <div className="navbar-items-contents">Hello</div>
            <div className="navbar-items-contents">Olarenwanju</div>
          </div>
          <div>Image</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
