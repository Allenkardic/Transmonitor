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

        <input
          className="navbar-items"
          placeholder="Search..."
          icon="fas fa-search"
        />

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
