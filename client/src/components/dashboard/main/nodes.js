import React, { Component, Fragment } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';

export default class Nodes extends Component {

    render() {
        return (
            <Fragment>
                <Row xs="1" sm="2" md="3" lg="4">
                    <Col>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-warning text-dark rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Voltage Node</p>
                                <p><b>{this.props.Vnode}</b><b>V</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-primary text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <FaTemperatureHigh size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Temperature node</p>
                                <p><b>{this.props.Tnode}</b><b> C</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 1</p>
                                <p><b>{this.props.C1node}</b><b>A</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 2</p>
                                <p><b>{this.props.C2node}</b><b>A</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 3</p>
                                <p><b>{this.props.C3node}</b><b>A</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 4</p>
                                <p><b>{this.props.C4node}</b><b>A</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 5</p>
                                <p><b>{this.props.C5node}</b><b>A</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 6</p>
                                <p><b>{this.props.C6node}</b><b>A</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-danger text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Power Line 1</p>
                                <p><b>{this.props.power1}</b><b>W</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-danger text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Power Line 2</p>
                                <p><b>{this.props.power2}</b><b>W</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-danger text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Power Line 3</p>
                                <p><b>{this.props.power3}</b><b>W</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-danger text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Power Line 4</p>
                                <p><b>{this.props.power4}</b><b>W</b></p>
                            </span>
                        </div>
                    </Col>
                    
                    <Col style={{ marginTop: '.25rem' }}>
                    </Col>

                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-danger text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Power Line 5</p>
                                <p><b>{this.props.power5}</b><b>W</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-danger text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Power Line 6</p>
                                <p><b>{this.props.power6}</b><b>W</b></p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
