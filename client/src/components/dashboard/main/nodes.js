import React, { Component, Fragment } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';
// import Axios from 'axios';


export default class Nodes extends Component {
    // ws = new WebSocket('ws://192.168.1.10:5000/readings')
    // state = {
    //     voltage: 1,
    //     temperature: 2,
    //     current1: 3,
    //     current2: 4,
    //     current3: 5,
    //     current4: 6,
    //     current5: 7,
    //     current6: 8,
    // }

    // componentDidMount() {
    //     this.ws.onopen = () => {
    //         // on connecting, do nothing but log it to the console
    //         console.log('connected')
    //     }

    //     this.ws.onmessage = evt => {
    //         // listen to data sent from the websocket server
    //         const message = JSON.parse(JSON.parse(evt.data))
    //         console.log(message);
    //         // this.setState({
    //         //     voltage: message.Voltage,
    //         //     temperature: message.TemperatureC,
    //         //     current1 : message.C1,
    //         //     current2 : message.C2,
    //         //     current3 : message.C3,
    //         //     current4 : message.C4,
    //         //     current5 : message.C5,
    //         //     current6 : message.Current6})
    //         this.setState({
    //             voltage: message.Voltage,
    //             temperature: message.Temperature,
    //             current1: message.Current1,
    //             current2: message.Current2,
    //             current3: message.Current3,
    //             current4: message.Current4,
    //             current5: message.Current5,
    //             current6: message.Current6
    //         })
    //     }

    //     this.ws.onclose = () => {
    //         console.log('disconnected')
    //         // automatically try to reconnect on connection loss
    //     }

    // }
    // componentWillUnmount() {
    //     this.ws.onclose();
    // }

    // // componentDidMount() {
    // //     Axios.get('http://localhost:5000/api/testing/data')
    // //         .then(res => {
    // //             this.setState({ items: res.data })
    // //         })
    // //         .catch(err => {
    // //             console.log(err)
    // //         })
    // // }

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
                </Row>
            </Fragment>
        )
    }
}
