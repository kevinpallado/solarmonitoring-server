import React, { Component } from 'react';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Row,Col } from 'reactstrap';

import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

export default class TemperatureNode extends Component {
    state = {
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
        }
      };
    render() {
        return (
            <div>
                <Row xs="1" sm="2" md="3" lg="4">
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-primary text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <FaTemperatureHigh size={32} />      
                                </span>
                                <span className="d-inline-block">
                                <p>Temperature node</p>
                                <p><b>0</b><b> C</b></p>
                                </span>
                    </div>
                </Col>
                </Row>
                <Row className="mt-3 border-top">
                <Col style={{marginTop: '.25rem'}}>
                    <MDBContainer>
                        <h5 className="mt-2">Temperature Graph</h5>
                        <Line data={this.state.tempdataline} options={{ responsive: true }} />
                    </MDBContainer>
                </Col>
                </Row>
            </div>
        )
    }
}
