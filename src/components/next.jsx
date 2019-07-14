import React, { Component } from "react";

class Next extends Component {
  state = {};
  render() {
    return (
      <div className="roller-next">
        <p className="roller-title">NEXT</p>
        <ul className="roller-todo-list">
          <li>
            <p>wash socks</p>
            <span>00:00 PM</span>
          </li>
          <li>
            <p>wash socks</p>
            <span>00:00 PM</span>
          </li>
          <li>
            <p>wash socks</p>
            <span>00:00 PM</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Next;
