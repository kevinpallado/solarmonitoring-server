import React, { Component, Fragment } from 'react';
import { Button, FormGroup, Form, Row, Label, Input, Col, Alert } from 'reactstrap';
import { defaults, Line } from 'react-chartjs-2';
import axios from 'axios';

defaults.global.animation = false;

class TemperatureGraph extends Component {
  state = {
    data: {
      labels: [],
      datasets: [{
        data: [],
        label: "Temperature",
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
    },
    datefrom: '',
    dateto: '',
    timefrom: '',
    timeto: '',
    dt_update: false
  }

  componentDidMount() {
    this.data_query('f20_temperature');
    // this.timer = setInterval(
    //   () => this.increment(),
    //   1000
    // )
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
  }

  data_query(method) {
    switch (method) {
      case 'f20_temperature':
        axios.get('http://localhost:5000/api/readings/data?event=read&method=all-temperature-data')
          .then(res => {
            this.data_bind('graph', res.data);
            // this.setState({ items: res.data })
          }).catch(err => {
            console.log(err)
          })
        break;
    }
  }

  data_bind(display, data) {
    switch (display) {
      case 'graph':

        const datasetsCopy = this.state.data.datasets.slice(0);
        const labelCopy = this.state.data.labels.slice(0);
        const dataCopy = datasetsCopy[0].data.slice(0);

        this.state.data.labels = [];
        datasetsCopy[0].data = [];

        data.forEach(element => {
          var date = new Date(element.daterecorded);
          var hour = date.getHours();
          if (date.getHours() > 12 && date.getHours() === 0) {
            var time = hour - 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " pm";
            labelCopy.push(time);
          }
          else {
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " am";
            labelCopy.push(time);
          }
          dataCopy.push(Math.round(element.tc));
        });
        datasetsCopy[0].data = dataCopy

        this.setState({
          data: Object.assign({}, this.state.data, {
            labels: labelCopy,
            datasets: datasetsCopy
          })
        });
    }
  }
  // increment() {
  // axios.get('http://localhost:5000/api/readings/data?event=read-temperature&method=all-temperature-data')
  //   .then(res => {
  //     console.log(res.data);
  //     console.log("ni gana");
  //     // this.setState({ items: res.data })
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // const labelCopy = this.state.data.labels.slice(0);
  // labelCopy[0] = labelCopy[1];
  // labelCopy[1] = labelCopy[2];
  // labelCopy[2] = labelCopy[3];
  // labelCopy[3] = labelCopy[4];
  // labelCopy[4] = labelCopy[5];
  // labelCopy[5] = labelCopy[6];
  // labelCopy[6] = Date.now();
  // const datasetsCopy = this.state.data.datasets.slice(0);
  // const dataCopy = datasetsCopy[0].data.slice(0);
  // dataCopy[0] = dataCopy[1];
  // dataCopy[1] = dataCopy[2];
  // dataCopy[2] = dataCopy[3];
  // dataCopy[3] = dataCopy[4];
  // dataCopy[4] = dataCopy[5];
  // dataCopy[5] = dataCopy[6];
  // dataCopy[6] = Math.random();
  // datasetsCopy[0].data = dataCopy;

  // this.setState({
  //   data: Object.assign({}, this.state.data, {
  //     labels: labelCopy,
  //     datasets: datasetsCopy
  //   })
  // });
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    var datefrom = this.state.datefrom + " " + this.state.timefrom;
    var dateto = this.state.dateto + " " + this.state.timeto;

    const data = {
      dateTo: dateto,
      dateFrom: datefrom
    }
    axios.post('http://localhost:5000/api/readings/event?event=read-date&method=between-dates-temperature', data)
      .then(res => this.data_bind('graph', res.data))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Fragment>
          <Form onSubmit={this.onSubmit}>
            <Row xs="3" sm="3" md="5" lg="5">
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Date From</Label>
                  <Input type="date" name="datefrom" onChange={this.onChange} id="datefrom" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Date To</Label>
                  <Input type="date" name="dateto" onChange={this.onChange} id="dateto" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Time From</Label>
                  <Input type="time" name="timefrom" onChange={this.onChange} id="timefrom" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Time To</Label>
                  <Input type="time" name="timeto" onChange={this.onChange} id="timeto" />
                </FormGroup>
              </Col>
              <Col>
                <Row>
                  <Label for="exampleEmail">&nbsp;</Label>
                </Row>
                <Row>
                  <Button type="submit" color="dark">Update</Button>
                </Row>
              </Col>
            </Row>
          </Form>

          {/* Automatic update example (no need na update button: alternative)
          {this.state.datefrom ? <Alert color="primary">{this.state.datefrom}</Alert> : null}
          {this.state.dateto ? <Alert color="primary">{this.state.dateto}</Alert> : null}
          {this.state.timefrom ? <Alert color="primary">{this.state.timefrom}</Alert> : null}
          {this.state.timeto ? <Alert color="primary">{this.state.timeto}</Alert> : null} */}
        </Fragment>
        <Line data={this.state.data} />
      </div>
    )
  }
}

export default TemperatureGraph;