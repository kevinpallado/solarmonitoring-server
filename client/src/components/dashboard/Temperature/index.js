import React, { Fragment, Component } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import axios from 'axios';

import GraphComponent from './graph';
import TableComponent from './table';
import classNames from 'classnames';

class MainIndex extends Component {

    state = {
        columns: [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Temperature (C)',
                field: 'tempc',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Date Recorded',
                field: 'date_recorded',
                sort: 'asc',
                width: 300
            }
        ],
        rows: [],
        data: {
            labels: [],
            datasets: [{
                data: [],
                label: "Temperature",
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
            }]
        },
        datefrom: '',
        dateto: '',
        timefrom: '',
        timeto: '',
        dt_update: false,
        activeTab: '1'
    }
    // BIND DATA
    componentDidMount() {
        this.data_query('f20_temperature');
    }

    data_query(method) {
        switch (method) {
            case 'f20_temperature':
                axios.get('http://localhost:5000/api/readings/data?event=read&method=all-temperature-data')
                    .then(res => {
                        this.data_bind('graph', res.data)
                        this.data_bind('table', res.data)
                    }).catch(err => {
                        console.log(err)
                    })
                break;
        }
    }
    //BIND DATA END
    // TAB 
    setActiveTab = val => {
        this.setState({ activeTab: val });
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) this.setActiveTab(tab);
    }

    // END TAB

    //GRAPH BIND
    data_bind(display, datas) {
        switch (display) {
            case 'graph':
                // console.log(datas)
                const datasetsCopy = this.state.data.datasets.slice(0);
                const labelCopy = this.state.data.labels.slice(0);
                const dataCopy = datasetsCopy[0].data.slice(0);

                this.state.data.labels = [];
                datasetsCopy[0].data = [];
                // console.log(datasetsCopy[0].data)

                datas.forEach(element => {
                    var date = new Date(element.daterecorded);
                    var hour = date.getHours();
                    if (date.getHours() > 12 && date.getHours() === 0) {
                        var time = hour - 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " pm";
                        labelCopy.push(time);
                    }
                    else {
                        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " am";
                        labelCopy.push(time);
                    }
                    dataCopy.push(Math.round(element.tc));
                });

                datasetsCopy[0].data = dataCopy
                // console.log(labelCopy, datasetsCopy)

                this.setState({
                    data: {
                        labels: labelCopy,
                        datasets: datasetsCopy
                    }
                });
                break;
            case 'table':
                this.setState({ rows: [] })
                datas.forEach(element => {
                    var date = new Date(element.daterecorded);
                    var hour = date.getHours();
                    if (date.getHours() > 12 && date.getHours() === 0) {
                        var time = hour - 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " pm";
                    }
                    else {
                        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " am";
                    }
                    this.setState(state => ({
                        rows: [...state.rows, { id: element.id, tempc: element.tc, date_recorded: time }]
                    }))
                });
                break;
            default:
                return null;
        }
    }
    //GRAPH BIND END

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();

        var datefrom = this.state.datefrom + " " + this.state.timefrom;
        var dateto = this.state.dateto + " " + this.state.timeto;

        const data = {
            dateTo: dateto,
            dateFrom: datefrom
        }
        axios.post('http://localhost:5000/api/readings/event?event=read-date&method=between-dates-temperature', data)
            .then(res => {
                this.data_bind('graph', res.data)
                this.data_bind('table', res.data)
            })
            .catch(e => console.log(e));
    }
    render() {
        return (
            <Fragment>
                <Form onSubmit={this.onSubmit}>
                    <Row xs="3" sm="3" md="5" lg="5">
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Date From</Label>
                                <Input type="date" name="datefrom" onChange={this.onChange} id="datefrom" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Date To</Label>
                                <Input type="date" name="dateto" onChange={this.onChange} id="dateto" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Time From</Label>
                                <Input type="time" name="timefrom" onChange={this.onChange} id="timefrom" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Time To</Label>
                                <Input type="time" name="timeto" onChange={this.onChange} id="timeto" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <Row>
                                <Label for="exampleEmail">&nbsp;</Label>
                            </Row>
                            <Row>
                                <Button type="submit" color="dark">Update</Button>
                            </Row>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col><Nav tabs>
                        <NavItem><NavLink className={classNames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1') }}>
                            Graph
                    </NavLink></NavItem>
                        <NavItem><NavLink className={classNames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2') }}>
                            Table
                    </NavLink></NavItem>
                    </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <GraphComponent stateData={this.state.data} />
                            </TabPane>
                            <TabPane tabId="2">
                                <TableComponent stateData={this.state} />
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default MainIndex;
