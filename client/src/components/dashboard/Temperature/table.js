import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Row, Col } from 'reactstrap';

class TemperatureTable extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: '1rem' }} className="border-top">
          <Col className="border" style={{ marginBottom: '2rem', marginTop: '1rem' }}>
            <MDBDataTable
              striped
              bordered
              hover
              data={this.props.stateData}
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