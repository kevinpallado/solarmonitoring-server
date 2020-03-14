import React, { Component } from 'react';
import {
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
    ws = new WebSocket('ws://192.168.1.26:5000/readings')

    state = {
        voltage: '',
        temperature: '',
        current1: '',
        current2: '',
        current3: '',
        current4: '',
        current5: '',
        current6: '',
        power1 : '',
        power2 : '',
        power3 : '',
        power4 : '',
        power5 : '',
        power6 : '',
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
        powerdataline: {
            labels: [],
            datasets: [
                {
                    label: "Power Node 1",
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
                    label: "Power Node 2",
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
                    label: "Power Node 3",
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
                    label: "Power Node 4",
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
                    label: "Power Node 5",
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
                    label: "Power Node 6",
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

            const message = JSON.parse(evt.data)
            this.setState({
                voltage: message.Voltage,
                temperature: message.TemperatureC,
                current1 : message.C1,
                current2 : message.C2,
                current3 : message.C3,
                current4 : message.C4,
                current5 : message.C5,
                current6 : message.C6,
                power1: message.power1,
                power2: message.power2,
                power3: message.power3,
                power4: message.power4,
                power5: message.power5,
                power6: message.power6})

            this.data_bind()
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        }

    }

    componentWillUnmount() {
        this.ws.onclose();
    }

    data_bind() {
        var date_now = Date.now();
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        date_now = new Date(date_now);
        var hour = date_now.getHours();
        date_now = monthNames[date_now.getMonth()] + "-" + date_now.getDate() + " " + (hour > 11 ? hour - 12 : hour) + ":" + date_now.getMinutes() + ":" + date_now.getSeconds() + (date_now.getHours() > 11 ? " AM" : " PM")
        const voltageLabel = this.state.voltagedataline.labels.slice(0);
        const temperatureLabel = this.state.tempdataline.labels.slice(0);
        const currentLabel = this.state.currentdataline.labels.slice(0);
        const powerLabel = this.state.powerdataline.labels.slice(0);

        const voltageDatasets = this.state.voltagedataline.datasets.slice(0);
        const currentDatasets = this.state.currentdataline.datasets.slice(0);
        const tempDatasets = this.state.tempdataline.datasets.slice(0);
        const powerDatasets = this.state.powerdataline.datasets.slice(0);

        const voltageDataCopy = voltageDatasets[0].data.slice(0);
        const tempDataCopy = tempDatasets[0].data.slice(0);

        const currentDataCopy1 = currentDatasets[0].data.slice(0);
        const currentDataCopy2 = currentDatasets[1].data.slice(0);
        const currentDataCopy3 = currentDatasets[2].data.slice(0);
        const currentDataCopy4 = currentDatasets[3].data.slice(0);
        const currentDataCopy5 = currentDatasets[4].data.slice(0);
        const currentDataCopy6 = currentDatasets[5].data.slice(0);

        const powerDataCopy1 = powerDatasets[0].data.slice(0);
        const powerDataCopy2 = powerDatasets[1].data.slice(0);
        const powerDataCopy3 = powerDatasets[2].data.slice(0);
        const powerDataCopy4 = powerDatasets[3].data.slice(0);
        const powerDataCopy5 = powerDatasets[4].data.slice(0);
        const powerDataCopy6 = powerDatasets[5].data.slice(0);

        if(voltageLabel.length === 6)
        {
            voltageLabel.pop()
            temperatureLabel.pop()
            currentLabel.pop()
            powerLabel.pop()

            voltageDataCopy.pop()
            tempDataCopy.pop()

            currentDataCopy1.pop();
            currentDataCopy2.pop();
            currentDataCopy3.pop();
            currentDataCopy4.pop();
            currentDataCopy5.pop();
            currentDataCopy6.pop();

            powerDataCopy1.pop();
            powerDataCopy2.pop();
            powerDataCopy3.pop();
            powerDataCopy4.pop();
            powerDataCopy5.pop();
            powerDataCopy6.pop();

            voltageLabel.unshift(date_now)
            temperatureLabel.unshift(date_now)
            currentLabel.unshift(date_now)

            voltageDataCopy.unshift(this.state.voltage)
            tempDataCopy.unshift(this.state.temperature)

            currentDataCopy1.unshift(this.state.current1);
            currentDataCopy2.unshift(this.state.current2);
            currentDataCopy3.unshift(this.state.current3);
            currentDataCopy4.unshift(this.state.current4);
            currentDataCopy5.unshift(this.state.current5);
            currentDataCopy6.unshift(this.state.current6);

            powerDataCopy1.unshift(this.state.power1);
            powerDataCopy2.unshift(this.state.power2);
            powerDataCopy3.unshift(this.state.power3);
            powerDataCopy4.unshift(this.state.power4);
            powerDataCopy5.unshift(this.state.power5);
            powerDataCopy6.unshift(this.state.power6);
        }
        else
        {
            voltageLabel.unshift(date_now)
            temperatureLabel.unshift(date_now)
            currentLabel.unshift(date_now)

            voltageDataCopy.unshift(this.state.voltage)
            tempDataCopy.unshift(this.state.temperature)

            currentDataCopy1.unshift(this.state.current1);
            currentDataCopy2.unshift(this.state.current2);
            currentDataCopy3.unshift(this.state.current3);
            currentDataCopy4.unshift(this.state.current4);
            currentDataCopy5.unshift(this.state.current5);
            currentDataCopy6.unshift(this.state.current6);

            powerDataCopy1.unshift(this.state.power1);
            powerDataCopy2.unshift(this.state.power2);
            powerDataCopy3.unshift(this.state.power3);
            powerDataCopy4.unshift(this.state.power4);
            powerDataCopy5.unshift(this.state.power5);
            powerDataCopy6.unshift(this.state.power6);
        }

        voltageDatasets[0].data = voltageDataCopy
        tempDatasets[0].data = tempDataCopy;

        currentDatasets[0].data = currentDataCopy1;
        currentDatasets[1].data = currentDataCopy2;
        currentDatasets[2].data = currentDataCopy3;
        currentDatasets[3].data = currentDataCopy4;
        currentDatasets[4].data = currentDataCopy5;
        currentDatasets[5].data = currentDataCopy6;

        powerDatasets[0].data = powerDataCopy1;
        powerDatasets[1].data = powerDataCopy2;
        powerDatasets[2].data = powerDataCopy3;
        powerDatasets[3].data = powerDataCopy4;
        powerDatasets[4].data = powerDataCopy5;
        powerDatasets[5].data = powerDataCopy6;

        this.setState({
            voltagedataline: {
                labels: voltageLabel,
                datasets: voltageDatasets
            },
            tempdataline: {
                labels: temperatureLabel,
                datasets: tempDatasets
            },
            currentdataline: {
                labels: currentLabel,
                datasets: currentDatasets
            },
            powerdataline: {
                labels: powerLabel,
                datasets: powerDatasets
            }
        });
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
                        <NodeComponent Vnode={this.state.voltage} Tnode={this.state.temperature} C1node={this.state.current1} C2node={this.state.current2} C3node={this.state.current3} C4node={this.state.current4} C5node={this.state.current5} C6node={this.state.current6} power1={this.state.power1} power2={this.state.power2} power3={this.state.power3} power4={this.state.power4} power5={this.state.power5} power6={this.state.power6}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <GraphComponent VoltageGraph={this.state.voltagedataline} TempGraph={this.state.tempdataline} CurrentGraph={this.state.currentdataline} PowerGraph={this.state.powerdataline}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default MainIndex;
