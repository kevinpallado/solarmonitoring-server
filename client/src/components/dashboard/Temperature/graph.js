import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { defaults, Line } from 'react-chartjs-2';
import axios from 'axios';

defaults.global.animation = false;

class DoughnutExample extends Component {
  state = {
    data: {
      labels: ["01/01/2020", "asddsa", "01/03/2020", "01/04/2020", "01/05/2020", "01/06/2020", "01/07/2020"],
      datasets: [{
        data: [0, 0, 0, 0, 0, 0, 0],
        label: "Temperature node 1",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      }]
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.increment(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  increment() {
    axios.get('http://localhost:5000/api/readings/data?event=read-temperature&method=all-temperature-data')
      .then(res => {
        console.log(res.data);
        console.log("ni gana");
        // this.setState({ items: res.data })
      }).catch(err => {
        console.log(err)
      })
    const labelCopy = this.state.data.labels.slice(0);
    labelCopy[0] = labelCopy[1];
    labelCopy[1] = labelCopy[2];
    labelCopy[2] = labelCopy[3];
    labelCopy[3] = labelCopy[4];
    labelCopy[4] = labelCopy[5];
    labelCopy[5] = labelCopy[6];
    labelCopy[6] = Date.now();
    const datasetsCopy = this.state.data.datasets.slice(0);
    const dataCopy = datasetsCopy[0].data.slice(0);
    dataCopy[0] = dataCopy[1];
    dataCopy[1] = dataCopy[2];
    dataCopy[2] = dataCopy[3];
    dataCopy[3] = dataCopy[4];
    dataCopy[4] = dataCopy[5];
    dataCopy[5] = dataCopy[6];
    dataCopy[6] = Math.random();
    datasetsCopy[0].data = dataCopy;

    this.setState({
      data: Object.assign({}, this.state.data, {
        labels: labelCopy,
        datasets: datasetsCopy
      })
    });
  }

  render() {
    return (
      <div>
        <Line data={this.state.data} />
        <Button>Hello</Button>
      </div>
    )
  }
}

export default DoughnutExample;