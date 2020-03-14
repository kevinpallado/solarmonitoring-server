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
                label: 'Power Line 1',
                field: 'p1',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Power Line 2',
                field: 'p2',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Power Line 3',
                field: 'p3',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Power Line 4',
                field: 'p4',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Power Line 5',
                field: 'p5',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Power Line 6',
                field: 'p6',
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
            datasets: [
              {
                data: [],
                label: "Power Line 1",
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
              },
              {
                data: [],
                label: "Power Line 2",
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
              },
              {
                data: [],
                label: "Power Line 3",
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
              },
              {
                data: [],
                label: "Power Line 4",
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
              },
              {
                data: [],
                label: "Power Line 5",
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
              },
              {
                data: [],
                label: "Power Line 6",
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
                pointHitRadius: 10
              }
            ]
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
        this.data_query('f20');
    }

    data_query(method) {
        switch (method) {
            case 'f20':
                axios.get('http://localhost:5000/api/readings/data?event=read&method=all-power-data')
                    .then(res => {
                        this.data_bind('graph', res.data, false)
                        this.data_bind('table', res.data, false)
                    }).catch(err => {
                        console.log(err)
                    })
                break;
            default:
                return null;
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
    data_bind(display, datas, command) {
        switch (display) {
            case 'graph':
                const datasetsCopy = this.state.data.datasets.slice(0);
                if(command)
                {
                    this.state.data.labels = [];
                    datasetsCopy[0].data = [];
                    datasetsCopy[1].data = [];
                    datasetsCopy[2].data = [];
                    datasetsCopy[3].data = [];
                    datasetsCopy[4].data = [];
                    datasetsCopy[5].data = [];
                }
                const labelCopy = this.state.data.labels.slice(0);
                const dataCopy = datasetsCopy[0].data.slice(0);
                const dataCopy1 = datasetsCopy[1].data.slice(0);
                const dataCopy2 = datasetsCopy[2].data.slice(0);
                const dataCopy3 = datasetsCopy[3].data.slice(0);
                const dataCopy4 = datasetsCopy[4].data.slice(0);
                const dataCopy5 = datasetsCopy[5].data.slice(0);
                datas.forEach(element => {
                var date = new Date(element.createdAt);
                var hour = date.getHours();
                var time;
                if(date.getHours() > 12 && date.getHours() === 0)
                {
                    time = hour-12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " pm";
                    labelCopy.push(time);
                }
                else
                {
                    time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " am";
                    labelCopy.push(time);
                }
                dataCopy.push(Math.round(element.p1));
                dataCopy1.push(Math.round(element.p2));
                dataCopy2.push(Math.round(element.p3));
                dataCopy3.push(Math.round(element.p4));
                dataCopy4.push(Math.round(element.p5));
                dataCopy5.push(Math.round(element.p6));
                });
                datasetsCopy[0].data = dataCopy
                datasetsCopy[1].data = dataCopy1
                datasetsCopy[2].data = dataCopy2
                datasetsCopy[3].data = dataCopy3
                datasetsCopy[4].data = dataCopy4
                datasetsCopy[5].data = dataCopy5
                
                this.setState({
                data: Object.assign({}, this.state.data, {
                    labels: labelCopy,
                    datasets: datasetsCopy
                })
                });
                break;
            case 'table':
                this.setState({ rows: [] })
                datas.forEach(element => {
                    var date = new Date(element.createdAt);
                    var hour = date.getHours();
                    var time;
                    if (date.getHours() > 12 && date.getHours() === 0) {
                        time = hour - 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " pm";
                    }
                    else {
                        time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " am";
                    }
                    this.setState(state => ({
                        rows: [...state.rows, { id: element.id, p1: element.p1, p2: element.p2, p3: element.p3, p4: element.p4, p5: element.p5, p6: element.p6, date_recorded: time }]
                    }))
                });
                break;
            default:
                break;
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
        axios.post('http://localhost:5000/api/readings/event?event=read-date&method=between-dates-power', data)
            .then(res => {
                this.data_bind('graph', res.data, true)
                this.data_bind('table', res.data, true)
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
