import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Graph extends Component {
    ws = new WebSocket('ws://192.168.1.10:5000/readings')

    state = {
        voltagedataline: {
            dropdownOpen: false,
            labels: [],
            datasets: [
                {
                    label: "Voltage node 1",
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
                    data: []
                }
            ]
        },
        tempdataline: {
            labels: [],
            datasets: [
                {
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
                    data: []
                }
            ]
        },
        currentdataline: {
            labels: [],
            datasets: [
                {
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
                    data: []
                },
                {
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
                    data: []
                },
                {
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
                    data: []
                },
                {
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
                    data: []
                },
                {
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
                    data: []
                },
                {
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
                    pointHitRadius: 10,
                    data: []
                }
            ]
        }
    };
    componentDidMount() {
        this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {

            const message = JSON.parse(JSON.parse(evt.data))
            // this.setState({
            //     voltage: message.Voltage,
            //     temperature: message.Temperature,
            //     current1 : message.Current1,
            //     current2 : message.Current2,
            //     current3 : message.Current3,
            //     current4 : message.Current4,
            //     current5 : message.Current5,
            //     current6 : message.Current6})
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        // automatically try to reconnect on connection loss
        }

    }

    // componentDidMount() {
        // this.timer = setInterval(
        //   () => this.increment(),
        //   1000
        // )
    //   }
    
    //   componentWillUnmount() {
        // clearInterval(this.timer)
    //   }
    data_bind() {
        const voltageLabel = this.state.voltagedataline.labels;
        const temperatureLabel = this.state.tempdataline.labels;
        const currentLabel = this.state.currentdataline.labels;

        const voltageData = this.state.voltagedataline.datasets[0].data;
        const temperatureData = this.state.tempdataline.datasets[0].data;

        const currentData1 = this.state.currentdataline.datasets[0].data;
        const currentData2 = this.state.currentdataline.datasets[1].data;
        const currentData3 = this.state.currentdataline.datasets[2].data;
        const currentData4 = this.state.currentdataline.datasets[3].data;
        const currentData5 = this.state.currentdataline.datasets[4].data;
        const currentData6 = this.state.currentdataline.datasets[5].data;

        // if(voltageLabel.length == 6) voltageLabel.pop(); voltageLabel.push()

        this.setState({
            data: Object.assign({}, this.state.data, {
                labels: labelCopy,
                datasets: datasetsCopy
            })
        });
  }
    

    render() {
        return (
            <Fragment>
                <Row>
                    <Col style={{ marginTop: '.25rem' }}>
                        <MDBContainer>
                            <h5 className="mt-2">Voltage Graph</h5>
                            <Line data={this.state.voltagedataline} options={{ responsive: true }}  redraw={true} />
                        </MDBContainer>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: '.25rem' }}>
                        <MDBContainer>
                            <h5 className="mt-2">Temperature Graph</h5>
                            <Line data={this.state.tempdataline} options={{ responsive: true }} />
                        </MDBContainer>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: '.25rem' }} >
                        <MDBContainer>
                            <h5 className="mt-2">Current Graph</h5>
                            <Line data={this.state.currentdataline} options={{ responsive: true }} />
                        </MDBContainer>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Graph;