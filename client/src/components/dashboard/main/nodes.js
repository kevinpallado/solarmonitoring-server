import React, { Component, Fragment } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';
// import Axios from 'axios';


export default class Nodes extends Component {
    ws = new WebSocket('ws://192.168.1.8:5000/readings')


    componentDidMount() {
        this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(JSON.parse(evt.data))
            this.setState({
                voltage: message.Voltage,
                temperature: message.TemperatureC,
                current1 : message.C1,
                current2 : message.C2,
                current3 : message.C3,
                current4 : message.C4,
                current5 : message.C5,
                current6 : message.Current6})
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        // automatically try to reconnect on connection loss
        }

    }
    componentWillUnmount() {
        this.ws.onclose();   
    }

    state = {
        itemz: {
            items: []
        }
    };
    
    DataToggle = () => this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });

    // componentDidMount() {
    //     Axios.get('http://localhost:5000/api/testing/data')
    //         .then(res => {
    //             this.setState({ items: res.data })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    render() {
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
                                <p><b>{this.state.voltage}</b><b>V</b></p>
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
                                <p><b>{this.state.temperature}</b><b> C</b></p>
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
                                <p><b>{this.state.current1}</b><b>A</b></p>
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
                                <p><b>{this.state.current2}</b><b>A</b></p>
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
                                <p><b>{this.state.current3}</b><b>A</b></p>
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
                                <p><b>{this.state.current4}</b><b>A</b></p>
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
                                <p><b>{this.state.current5}</b><b>A</b></p>
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
                                <p><b>{this.state.current6}</b><b>A</b></p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
