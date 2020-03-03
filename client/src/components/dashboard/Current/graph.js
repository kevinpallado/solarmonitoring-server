import React, { Component, Fragment } from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
export default class TemperatureNode extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          label: "Current Node 1",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 244,230, .3)",
          borderColor: "rgb(255, 50, 228)",
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
        },
        {
          data: [],
          label: "Current Node 2",
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
        },
        {
          data: [],
          label: "Current Node 3",
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
        },
        {
          data: [],
          label: "Current Node 4",
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
        },
        {
          data: [],
          label: "Current Node 5",
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
        },
        {
          data: [],
          label: "Current Node 6",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10
        }
      ]
    },
    datefrom: '',
    dateto: '',
    timefrom: '',
    timeto: '',
    dt_update: false
  };
  componentDidMount() {
    this.data_query('f20_current');
  }


  data_query(method) {
    switch (method)
    {
      case 'f20_current':
        axios.get('http://localhost:5000/api/readings/data?event=read&method=all-current-data')
        .then(res => {
          this.data_bind('graph',res.data);
          // this.setState({ items: res.data })
        }).catch(err => {
          console.log(err)
        })
        break;
    }
  }

  data_bind(display,data) {
    switch (display)
    {
      case 'graph':
        const datasetsCopy = this.state.data.datasets.slice(0);
        const labelCopy = this.state.data.labels.slice(0);
        const dataCopy = datasetsCopy[0].data.slice(0);
        const dataCopy1 = datasetsCopy[1].data.slice(0);
        const dataCopy2 = datasetsCopy[2].data.slice(0);
        const dataCopy3 = datasetsCopy[3].data.slice(0);
        const dataCopy4 = datasetsCopy[4].data.slice(0);
        const dataCopy5 = datasetsCopy[5].data.slice(0);
        data.forEach(element => {
          var date = new Date(element.daterecorded);
          var hour = date.getHours();
          if(date.getHours() > 12 && date.getHours() == 0)
          {
            var time = hour-12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " pm";
            labelCopy.push(time);
          }
          else
          {
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " am";
            labelCopy.push(time);
          }
          dataCopy.push(Math.round(element.c1));
          dataCopy1.push(Math.round(element.c2));
          dataCopy2.push(Math.round(element.c3));
          dataCopy3.push(Math.round(element.c4));
          dataCopy4.push(Math.round(element.c5));
          dataCopy5.push(Math.round(element.c6));
        });
        datasetsCopy[0].data = dataCopy
        datasetsCopy[1].data = dataCopy1
        datasetsCopy[2].data = dataCopy2
        datasetsCopy[3].data = dataCopy3
        datasetsCopy[4].data = dataCopy4
        datasetsCopy[5].data = dataCopy5
        
        this.setState({
          data: Object.assign({}, this.state.data, {
            labels: labelCopy,
            datasets: datasetsCopy
          })
        });
    }
  }
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
    axios.post('http://localhost:5000/api/readings/event?event=read-date&method=between-dates-current', data)
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
        <Row className="mt-3 border-top">
          <Col style={{ marginTop: '.25rem' }}>
            <MDBContainer>
              <h5 className="mt-2">Current Graph</h5>
              <Line data={this.state.data} options={{ responsive: true }} />
            </MDBContainer>
          </Col>
        </Row>
      </div>
    )
  }
}
