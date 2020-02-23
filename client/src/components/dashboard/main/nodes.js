import React, { Component, Fragment } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';
import Axios from 'axios';

export default class Nodes extends Component {
    state = {
        items: []
    };
    DataToggle = () => this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });

    componentDidMount() {
        Axios.get('http://localhost:5000/api/testing/data')
            .then(res => {
                this.setState({ items: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { items } = this.state;
        return (
            <Fragment>
                <Row xs="1" sm="2" md="3" lg="4">
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-warning text-dark rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Voltage Node</p>
                                <p><b>{items.voltage}</b><b> V</b></p>
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
                                <p><b>{items.temperature}</b><b> C</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 1</p>
                                <p><b>{items.c1}</b><b> A</b></p>
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
                                <p><b>{items.c2}</b><b> A</b></p>
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
                                <p><b>{items.c3}</b><b> A</b></p>
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
                                <p><b>{items.c4}</b><b> A</b></p>
                            </span>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '.25rem' }}>
                        <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                            <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                                <AiFillThunderbolt size={32} />
                            </span>
                            <span className="d-inline-block">
                                <p>Current Node 5</p>
                                <p><b>{items.c5}</b><b> A</b></p>
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
                                <p><b>{items.c6}</b><b> A</b></p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}