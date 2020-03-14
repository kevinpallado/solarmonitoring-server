import React, { Component } from 'react';
import { defaults, Line } from "react-chartjs-2";

defaults.global.animation = false;

class PowerGraph extends Component {
  render() {
    return (
      <Line data={this.props.stateData} />
    )
  }
}

export default PowerGraph;