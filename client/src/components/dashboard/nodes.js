import React, { Component, useState } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Row,Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label } from 'reactstrap';


import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

export default class Nodes extends Component {
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
                data: [80, 76, 80, 81, 56, 55, 40]
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
      DataToggle = () => this.setState({
          dropdownOpen: !this.state.dropdownOpen
      });

    render() {
        return (
            <div>
                <Row xs="1" sm="2" md="3" lg="4">
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-warning text-dark rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <AiFillThunderbolt size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Voltage Node</p>
                                <p><b>0</b><b>V</b></p>
                                </span>
                    </div>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-primary text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <FaTemperatureHigh size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Temperature node</p>
                                <p><b>0</b><b> C</b></p>
                                </span>
                    </div>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-success text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <AiFillThunderbolt size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Current Node 1</p>
                                <p><b>0</b><b>A</b></p>
                                </span>
                    </div>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-success text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <AiFillThunderbolt size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Current Node 2</p>
                                <p><b>0</b><b>A</b></p>
                                </span>
                    </div>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-success text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <AiFillThunderbolt size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Current Node 3</p>
                                <p><b>0</b><b>A</b></p>
                                </span>
                    </div>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-success text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <AiFillThunderbolt size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Current Node 4</p>
                                <p><b>0</b><b>A</b></p>
                                </span>
                    </div>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-success text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <AiFillThunderbolt size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Current Node 5</p>
                                <p><b>0</b><b>A</b></p>
                                </span>
                    </div>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <div className="shadow-sm border  bg-white rounded" style={{display: 'flex', padding: '.25rem'}}>
                                <span className="p-3 bg-success text-white rounded" style={{marginRight: '2rem', textAlign: 'center', height:'4rem', marginTop:'.25rem'}}>
                                <AiFillThunderbolt size={32} />      
                                </span>
                                <span class="d-inline-block">
                                <p>Current Node 6</p>
                                <p><b>0</b><b>A</b></p>
                                </span>
                    </div>
                </Col>
                </Row>
                <Row className="border-top mt-3">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.DataToggle} className="mt-3">
                <DropdownToggle caret>
                    Select View
                    </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Graph</DropdownItem>
                    <DropdownItem>Table</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </Row>
                <Row className="mt-3"  xs="1" sm="2">
                <Col style={{marginTop: '.25rem'}}>
                    <MDBContainer>
                        <h5 className="mt-2">Voltage Graph</h5>
                        <Line data={this.state.tempdataline} options={{ responsive: true }} />
                    </MDBContainer>
                </Col>
                <Col style={{marginTop: '.25rem'}}>
                    <MDBContainer>
                        <h5 className="mt-2">Temperature Graph</h5>
                        <Line data={this.state.voltagedataline} options={{ responsive: true }} />
                    </MDBContainer>
                </Col>
                </Row>
                <Row>
                    <Col style={{marginTop: '.25rem'}} >
                    <MDBContainer>
                        <h5 className="mt-2">Current Graph</h5>
                        <Line data={this.state.currentdataline} options={{ responsive: true }} />
                    </MDBContainer>
                    </Col>
                </Row>
            </div>
        )
    }
}
