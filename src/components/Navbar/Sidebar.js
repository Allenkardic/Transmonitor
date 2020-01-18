/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/Sidebar.css";

class Sidebar extends Component {
  //   closeButton = () => {
  //     document.getElementById("mySideNav").style.width = "0px";
  //     // document.querySelector(".open-bars").style.display = "none";
  //   };

  //   openButton = () => {
  //     document.getElementById("mySideNav").style.width = "300px";
  //   };
  constructor(props) {
    super(props);
    this.state = {
      showContent: true
    };
  }
  onToggleClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-des">
          <div>
            <h1>hello</h1>
            <h3>jjjjj</h3>
          </div>
        </div>

        <div className="sidebar-mob">
          <div className="sidebar-mob-item">
            {this.state.showContent ? (
              <ul className="sidebar-item-content">
                <li>hello</li>
                <li>whats</li>
                <li>jhhhh</li>
              </ul>
            ) : null}
          </div>
          <div onClick={this.onToggleClick}>click</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
