import React, { Component, Fragment } from 'react';
import { defaults, Line } from "react-chartjs-2";

defaults.global.animation = false;

class VoltageGraph extends Component {
  render() {
    return (
      <Line data={this.props.stateData} />
    )
  }
}

export default VoltageGraph;