import React, { Fragment, Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, FormGroup, Form, Row, Label, Input, Col, Alert } from 'reactstrap';
import axios from 'axios';

class TemperatureTable extends Component {
  state = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Temperature (C)',
        field: 'tempc',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Date Recorded',
        field: 'date_recorded',
        sort: 'asc',
        width: 300
      }
    ],
    rows: [],
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    this.data_query('f20_temperature');
  }

  data_query(method) {
    switch (method) {
      case 'f20_temperature':
        axios.get('http://localhost:5000/api/readings/data?event=read&method=all-temperature-data')
          .then(res => {
            this.data_bind('table', res.data);
            // this.setState({ items: res.data })
          }).catch(err => {
            console.log(err)
          })
        break;
    }
  }

  data_bind(display, data) {
    switch (display) {
      case 'table':

        data.forEach(element => {
          var date = new Date(element.daterecorded);
          var hour = date.getHours();
          if (date.getHours() > 12 && date.getHours() === 0) {
            var time = hour - 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " pm";
          }
          else {
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " am";
          }
          this.data.push({ id: element.id, tempc: element.tc, date_recorded: time });
        });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    // var datefrom = this.state.datefrom + " " + this.state.timefrom;
    // var dateto = this.state.dateto + " " + this.state.timeto;

    // const data = {
    //   dateTo: dateto,
    //   dateFrom: datefrom
    // }
    // axios.post('http://localhost:5000/api/readings/event?event=read-date&method=between-dates-temperature', data)
    //   .then(res => this.data_bind('graph', res.data))
    //   .catch(e => console.log(e));

    this.setState(state => ({
      rows: [...state.rows, { id: 5, tempc: 35.6, date_recorded: Date.now() }]
    }))
  }
  render() {
    return (
      <div>
        <Fragment>
          <Form onSubmit={this.props.onSubmits}>
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
        <Row style={{ marginTop: '1rem' }} className="border-top">
          <Col className="border" style={{ marginBottom: '2rem', marginTop: '1rem' }}>
            <MDBDataTable
              striped
              bordered
              hover
              data={this.props.onData}
              searching={false}
              entries={10}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
export default TemperatureTable;