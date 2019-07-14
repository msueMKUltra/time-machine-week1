import React, { Component } from "react";

class Now extends Component {
  state = {};
  render() {
    return (
      <div className="roller-now">
        <div className="roller-now-card">
          <h3 className="roller-now-job">Wash dishes</h3>
          <ul className="roller-now-time">
            <li className="d-flex">
              <p className="roller-now-progress" />
              <span>work 00:10</span>
            </li>
            <li className="d-flex">
              <p className="roller-now-progress" />
              <span>idle 00:10</span>
            </li>
            <li className="d-flex">
              <p className="roller-now-progress" />
              <span>rest 00:10</span>
            </li>
          </ul>
          <div className="roller-now-percent">
            <p className="roller-now-perform">
              40%<span>perf.</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Now;
