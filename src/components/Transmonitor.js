/** @format */

import React, { Component } from "react";

class Transmonitor extends Component {
  state = {
    showContent: false
  };

  onToggleClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };
  render() {
    const { id, name, phone } = this.props.trans;
    return (
      <div class="trans-container">
        <div className="trans-container-items">
          {" "}
          <span className="vw">VW</span>
          {name}
        </div>
        <div className="trans-container-items">{id}</div>
        <div className="trans-container-items">{phone}</div>
        <div className="trans-container-items">{id}</div>
        <div className="trans-container-items">{name}</div>
        <div className="trans-container-items">
          <i class="fas fa-arrow-down" onClick={this.onToggleClick} />
        </div>
        <div className="hidden-items">
          {this.state.showContent ? <div>hello</div> : null}
        </div>
        {/* <table>
          <tr>
            <td>
              {" "}
              <span>VW</span>
              {name}
            </td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>
              <div className="pending-issues">{name}</div>
            </td>
            <td onClick={this.onToggleClick}>click</td>
          </tr>
          {this.state.showContent ? (
            <div>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </div>
          ) : null}
        </table> */}
      </div>
    );
  }
}

export default Transmonitor;
