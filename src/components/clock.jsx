import React, { Component } from "react";
import * as d3 from "d3";

class Clock extends Component {
  target1 = React.createRef();
  target2 = React.createRef();

  model = {
    width: 660,
    height: 650
  };

  state = {
    targetFlag: null,
    pieData: [],
    flagData: [],
    time: {
      now: this.whatTimeIsIt(),
      ampm: this.whatAMPMIsIt()
    }
  };

  componentDidMount() {
    const { pieData, flagData } = this.state;
    for (let i = 0; i < 72; i++) {
      let bold = 0.2;
      if (i % 6) bold = 0.1;
      pieData.push((1 / 72) * bold);
      pieData.push((1 / 72) * (1 - bold));
      flagData.push(1 / 72);
    }

    this.renderClock();
    this.renderFlag();

    // const that = this
    setInterval(() => {
      const { time } = { ...this.state };
      time.now = this.whatTimeIsIt();
      time.ampm = this.whatAMPMIsIt();
      this.setState({ time });
    }, 1000);
  }

  whatTimeIsIt() {
    return `${("0" + new Date().getHours()).slice(-2)}:${(
      "0" + new Date().getMinutes()
    ).slice(-2)}`;
  }

  whatAMPMIsIt() {
    return new Date().getHours() < 12 ? "AM" : "PM";
  }

  componentDidUpdate() {
    this.renderClock();
  }

  renderClock() {
    const group = d3.select(this.target1.current);
    const arc1 = d3
      .arc()
      .outerRadius(220)
      .innerRadius(225);
    const arc2 = d3
      .arc()
      .outerRadius(220)
      .innerRadius(230);
    const arc3 = d3
      .arc()
      .outerRadius(220)
      .innerRadius(250);
    const pie = d3
      .pie()
      .sort(null)
      .value(d => d);

    const update = group.selectAll(".arc").data(pie(this.state.pieData));
    const enter = update
      .enter()
      .append("g")
      .attr("class", "arc");
    const exit = update.exit();

    update
      .select("path")
      .attr("d", (d, i) => (i % 12 ? arc1(d) : arc2(d)))
      .attr("fill", (d, i) =>
        i % 2 ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)"
      )
      .filter((d, i) => i === this.state.targetFlag)
      .attr("d", arc3);

    enter
      .append("path")
      .attr("d", (d, i) => (i % 12 ? arc1(d) : arc2(d)))
      .attr("fill", (d, i) =>
        i % 2 ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)"
      );

    exit.remove();
  }

  renderFlag() {
    const group = d3.select(this.target2.current);
    const arc = d3
      .arc()
      .outerRadius(220)
      .innerRadius(260);

    const pie = d3
      .pie()
      .startAngle(-(1 / 72) * Math.PI)
      .endAngle((2 - 1 / 72) * Math.PI)
      .sort(null)
      .value(d => d);

    const update = group.selectAll(".flag").data(pie(this.state.flagData));
    const enter = update
      .enter()
      .append("g")
      .attr("class", "flag");
    const exit = update.exit();

    enter
      .append("path")
      .attr("d", arc)
      .attr("opacity", 0)
      .attr("cursor", "pointer");

    exit.remove();

    this.hoverFlag();
  }

  hoverFlag() {
    const flags = d3.select(this.target2.current).selectAll(".flag path");
    const that = this;
    flags
      .on("mouseover", function(d, i) {
        let { targetFlag } = { ...that.state };
        targetFlag = i * 2;
        that.setState({ targetFlag });
      })
      .on("mouseout", function(d, i) {
        let { targetFlag } = { ...that.state };
        targetFlag = null;
        that.setState({ targetFlag });
      });
  }

  render() {
    const { width, height } = this.model;
    const { time } = this.state;
    const { topic } = this.props;
    return (
      <div className="w-100 h-100 roller-clock-section">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
        >
          <g
            ref={this.target1}
            transform={`translate(${width / 2}, ${height / 2})`}
          >
            <circle r="260" fill={topic.color} opacity="0.3" />
          </g>
          <g
            ref={this.target2}
            transform={`translate(${width / 2}, ${height / 2})`}
          />
        </svg>
        <div className="roller-clock-detail">
          <p className="roller-clock-status">{topic.label}</p>
          <p className="roller-clock-time">{time.now}</p>
          <p className="roller-clock-ampm">{time.ampm}</p>
        </div>
      </div>
    );
  }
}

export default Clock;
