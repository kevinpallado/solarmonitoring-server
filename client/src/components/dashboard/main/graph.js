import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Graph extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col style={{ marginTop: '.25rem' }}>
                        <MDBContainer>
                            <h5 className="mt-2">Voltage Graph</h5>
                            <Line data={this.props.VoltageGraph} options={{ responsive: true }} redraw={true} />
                        </MDBContainer>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <MDBContainer>
                            <h5 className="mt-2">Temperature Graph</h5>
                            <Line data={this.props.TempGraph} options={{ responsive: true }} />
                        </MDBContainer>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: '.25rem' }} >
                        <MDBContainer>
                            <h5 className="mt-2">Current Graph</h5>
                            <Line data={this.props.CurrentGraph} options={{ responsive: true }} />
                        </MDBContainer>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }} >
                        <MDBContainer>
                            <h5 className="mt-2">Power Graph</h5>
                            <Line data={this.props.PowerGraph} options={{ responsive: true }} />
                        </MDBContainer>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Graph;