import React, { Component } from 'react';
import {
    Row,
    Col,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import NodeComponent from './nodes';
import GraphComponent from './graph';
import classNames from 'classnames';

class MainIndex extends Component {
    ws = new WebSocket('ws://192.168.1.10:5000/readings')

    state = {
        voltage: '',
        temperature: '',
        current1: '',
        current2: '',
        current3: '',
        current4: '',
        current5: '',
        current6: '',
        voltagedataline: {
            dropdownOpen: false,
            labels: [],
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
                    data: []
                }
            ]
        },
        tempdataline: {
            labels: [],
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
                    data: []
                }
            ]
        },
        currentdataline: {
            labels: [],
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
                    data: []
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
                    data: []
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
                    data: []
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
                    data: []
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
                    data: []
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
                    data: []
                }
            ]
        },
        activeTab: '1'
    };
    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {

            const message = JSON.parse(JSON.parse(evt.data))
            // this.setState({
            //     voltage: message.Voltage,
            //     temperature: message.Temperature,
            //     current1 : message.Current1,
            //     current2 : message.Current2,
            //     current3 : message.Current3,
            //     current4 : message.Current4,
            //     current5 : message.Current5,
            //     current6 : message.Current6})
            this.setState({
                voltage: message.Voltage,
                temperature: message.Temperature,
                current1: message.Current1,
                current2: message.Current2,
                current3: message.Current3,
                current4: message.Current4,
                current5: message.Current5,
                current6: message.Current6
            })
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
        }

    }

    componentWillUnmount() {
        this.ws.onclose();
    }

    // componentDidMount() {
    // this.timer = setInterval(
    //   () => this.increment(),
    //   1000
    // )
    //   }

    //   componentWillUnmount() {
    // clearInterval(this.timer)
    //   }
    data_bind() {
        var date_now = new Date();

        // const voltageLabel = this.state.voltagedataline.labels.slice(0);
        // const temperatureLabel = this.state.tempdataline.labels.slice(0);
        // const currentLabel = this.state.currentdataline.labels.slice(0);

        // const voltageDatasets = this.state.voltagedataline.datasets.slice(0);
        // const currentDatasets = this.state.voltagedataline.datasets.slice(0);
        // const tempDatasets = this.state.voltagedataline.datasets.slice(0);

        // // const voltageData = this.state.voltagedataline.datasets[0].data.slice(0);
        // const voltageDataCopy = voltageDatasets[0].data.slice(0);
        // const tempDataCopy = tempDatasets[0].data.slice(0);

        // voltageLabel.length == 6 ? voltageLabel.pop() : '';
        // temperatureLabel.length == 6 ? temperatureLabel.pop() : '';
        // currentLabel.length == 6 ? currentLabel.pop() : '';

        // voltageData.length == 6 ? voltageData.pop() : '';
        // temperatureData.length == 6 ? temperatureData.pop() : '';

        // const currentDataCopy = [];
        // for(var x=0; x<=6; x++)
        // {
        //     currentDataCopy[x] = currentDatasets[x].data.slice(0);
        // }
        // const currentDataCopy2 = currentDatasets[1].data.slice(0);
        // const currentDataCopy3 = currentDatasets[2].data.slice(0);
        // const currentDataCopy4 = currentDatasets[3].data.slice(0);
        // const currentDataCopy5 = currentDatasets[4].data.slice(0);
        // const currentDataCopy6 = currentDatasets[5].data.slice(0);

        // currentData1.length == 6 ? currentData1.pop() : '';
        // currentData2.length == 6 ? currentData2.pop() : '';
        // currentData3.length == 6 ? currentData3.pop() : '';
        // currentData4.length == 6 ? currentData4.pop() : '';
        // currentData5.length == 6 ? currentData5.pop() : '';
        // currentData6.length == 6 ? currentData6.pop() : '';

        // voltageLabel.push(date_now);
        // temperatureLabel.push(date_now);
        // currentLabel.push(date_now);

        // voltageData.push(this.state.voltage);
        // temperatureData.push(this.state.temperature);
        // currentData1.push(this.state.current1);
        // currentData2.push(this.state.current2);
        // currentData3.push(this.state.current3);
        // currentData4.push(this.state.current4);
        // currentData5.push(this.state.current5);
        // currentData6.push(this.state.current6);

        // this.setState({
        //     data: Object.assign({}, this.state.voltagedataline, {
        //         labels: voltageLabel,
        //         datasets: voltageData
        //     })
        // });

        // this.setState({
        //     data: Object.assign({}, this.state.tempdataline, {
        //         labels: temperatureLabel,
        //         datasets: temperatureData
        //     })
        // });

        // this.setState({
        //     data: Object.assign({}, this.state.currentdataline, {
        //         labels: currentLabel,
        //         datasets: temperatureData
        //     })
        // });
    }

    setActiveTab = data => {
        if (this.state.activeTab !== data) this.setState({ activeTab: data });
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) this.setActiveTab(tab);
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem><NavLink className={classNames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1') }}>
                        Node
                    </NavLink></NavItem>
                    <NavItem><NavLink className={classNames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2') }}>
                        Graph
                    </NavLink></NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <NodeComponent Vnode={this.state.voltage} Tnode={this.state.temperature} C1node={this.state.current1} C2node={this.state.current2} C3node={this.state.current3} C4node={this.state.current4} C5node={this.state.current5} C6node={this.state.current6} />
                    </TabPane>
                    <TabPane tabId="2">
                        <GraphComponent VoltageGraph={this.state.voltagedataline} TempGraph={this.state.tempdataline} CurrentGraph={this.state.currentdataline} />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default MainIndex;
