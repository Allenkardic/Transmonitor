/** @format */

import React, { Component } from "react";
import "../css/Trans.css";

import { connect } from "react-redux";
import { getUsers } from "../redux/actions/transAction";
import chart from "../images/chart.png";

import Transmonitor from "./Transmonitor";

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

        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}>
          <div
            style={{
              flex: "6",
              padding: "1rem 1rem"
            }}>
            <img style={{ maxWidth: "600px" }} src={chart} alt="img" />
          </div>
          <div
            style={{
              flex: "4",
              padding: "1rem 1rem"
            }}>
            <img style={{ width: "500px" }} src={chart} alt="img" />
          </div>
        </div>

        <div className="section-three">
          <h1 style={{ marginTop: "2rem", marginBottom: "2rem" }}>Payments</h1>
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
                  <i class="fas fa-arrow-down" />
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
        <div>
          <div className="container-home">
            <div className="trans-container-items origin-trans">Item type</div>
            <div className="trans-container-items origin-trans">Price</div>
            <div className="trans-container-items origin-trans">
              Transaction no
            </div>
            <div className="trans-container-items origin-trans">Time</div>
            <div className="trans-container-items origin-trans">pending</div>
            <div className="trans-container-items origin-trans"></div>
          </div>
          {this.props.trans.users.map((item) => (
            <Transmonitor trans={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trans: state.trans
});

export default connect(mapStateToProps, { getUsers })(Transmonitors);
