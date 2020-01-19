/** @format */

import React, { Component } from "react";
import "../css/Trans.css";

import { connect } from "react-redux";
import { getUsers } from "../redux/actions/transAction";
import chart from "../images/chart.png";

class Transmonitors extends Component {
  state = {
    showContent: false
  };

  onToggleClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  componentDidMount() {
    console.log("users", this.props);
    this.props.getUsers();
  }

  render() {
    console.log("user props", this.props.trans.users[1]);
    return (
      <div className="container-trans">
        <div className="transaction">
          <div className="transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    {/* <span>&#8358;</span> */}
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>

          <div className="transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    <span>&#8358;</span>
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>

          <div className="transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    {/* <span>&#8358;</span> */}
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>

          <div className="transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    <span>&#8358;</span>
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>
        </div>

        <div className="section-two">
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="section-three">
          <div>Payments</div>
          <div className="payment-section">
            <div>showing 20 > out of 500 payment</div>
            <input
              style={{ height: "3vh", marginRight: "5rem", marginLeft: "4rem" }}
              placeholder="search payment"
            />
            <div>show</div>

            <div className="item-toggle">
              <div>
                All{" "}
                <span
                  style={{ marginLeft: "6rem" }}
                  onClick={this.onToggleClick}>
                  click
                </span>{" "}
              </div>
              <div>
                {this.state.showContent ? (
                  <div>
                    <div>Reconciled</div>
                    <div>Un-reconcilled</div>
                    <div>Settled</div>
                    <div>Unsettled</div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trans: state.trans
});

export default connect(mapStateToProps, { getUsers })(Transmonitors);
