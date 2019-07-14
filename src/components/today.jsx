import React, { Component } from "react";
import Clock from "./clock";
import Now from "./now";
import Next from "./next";

class Today extends Component {
  topics = [
    {
      name: "roller-working",
      color: "#7e7e57",
      label: "working..."
    },
    {
      name: "roller-resting",
      color: "#424864",
      label: "resting..."
    },
    {
      name: "roller-idling",
      color: "#425464",
      label: "idling..."
    }
  ];

  state = {
    topicIndex: 0
  };

  handleClickTime = () => {
    let { topicIndex } = { ...this.state };
    topicIndex = (topicIndex + 1) % this.topics.length;
    this.setState({ topicIndex });
  };

  render() {
    const { topicIndex: index } = this.state;
    return (
      // <div className="roller-container roller-idling">
      // <div className="roller-container roller-working">
      <div className={"roller-container " + this.topics[index].name}>
        <div className="roller-clock">
          <Clock topic={this.topics[index]} />
        </div>
        <div className="roller-top d-flex">
          <div className="roller-count-down d-flex justify-content-end align-items-center">
            <button
              className="roller-count-down-btn p-0"
              onClick={this.handleClickTime}
            >
              <span>00:00</span>
            </button>
            <p className="roller-title">NOW</p>
          </div>
          <Now />
        </div>
        <div className="roller-bottom d-flex justify-content-end">
          <Next />
        </div>
      </div>
    );
  }
}

export default Today;
