import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Graph extends Component {
    ws = new WebSocket('ws://192.168.1.10:5000/readings')

    // componentDidMount() {
    //     this.ws.onopen = () => {
    //     // on connecting, do nothing but log it to the console
    //         console.log('connected')
    //     }

    //     this.ws.onmessage = evt => {
    //         // listen to data sent from the websocket server
    //         const message = JSON.parse(JSON.parse(evt.data))
    //         console.log(this.state.voltagedataline.datasets[0].data.length);
    //         if(this.state.voltagedataline.datasets[0].data.length == 10)
    //         {
    //             this.state.voltagedataline.datasets[0].data.pop();
    //             this.state.voltagedataline.datasets[0].data.push(message.Voltage);
    //         }
    //         else
    //         {
    //             this.state.voltagedataline.datasets[0].data.push(message.Voltage);
    //         }
    //         console.log(this.state.voltagedataline.datasets[0].data);
    //         // this.setState({
    //         //     voltage: message.Voltage,
    //         //     temperature: message.Temperature,
    //         //     current1 : message.Current1,
    //         //     current2 : message.Current2,
    //         //     current3 : message.Current3,
    //         //     current4 : message.Current4,
    //         //     current5 : message.Current5,
    //         //     current6 : message.Current6})
    //     }

    //     this.ws.onclose = () => {
    //         console.log('disconnected')
    //     // automatically try to reconnect on connection loss
    //     }

    // }
    
    state = {
        voltagedataline: {
            dropdownOpen: false,
            labels: ["January", "February", "March", "April", "May", "June", "July"],
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
            labels: ["January", "February", "March", "April", "May", "June", "July"],
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
                    data: [80, 76, 80, 81, 56, 55, 40]
                }
            ]
        },
        currentdataline: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
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
                    data: [80, 76, 80, 81, 56, 55, 40]
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
                    data: [80, 76, 80, 81, 56, 55, 40]
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
                    data: [80, 76, 80, 81, 56, 55, 40]
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
                    data: [80, 76, 80, 81, 56, 55, 40]
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
                    data: [80, 76, 80, 81, 56, 55, 40]
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
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    };

    render() {
        return (
            <Fragment>
                <Row className="mt-3" xs="1" sm="2">
                    <Col style={{ marginTop: '.25rem' }}>
                        <MDBContainer>
                            <h5 className="mt-2">Voltage Graph</h5>
                            <Line data={this.state.voltagedataline} options={{ responsive: true }}  redraw={true} />
                        </MDBContainer>
                    </Col>
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