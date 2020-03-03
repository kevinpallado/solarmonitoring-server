import React, { useState } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';

import GraphComponent from './graph';
import TableComponent from './table';
import classNames from 'classnames';

class MainIndex extends React.Component {

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
        data: [{ mech: "ook" }],
        datefrom: '',
        dateto: '',
        timefrom: '',
        timeto: '',
        dt_update: false,
        activeTab: '1'
    }

    oof = e => {
        e.preventDefault();
        console.log("click!");
    }
    onSubmit = e => {
        e.preventDefault();

        this.setState(state => ({
            rows: [...state.rows, { id: 5, tempc: 35.6, date_recorded: Date.now() }]
        }))
    }

    setActiveTab = val => {
        this.setState({ activeTab: val });
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) this.setActiveTab(tab);
    }

    data_bind(display, data) {
        switch (display) {
            case 'graph':

                const datasetsCopy = this.state.data.datasets.slice(0);
                const labelCopy = this.state.data.labels.slice(0);
                const dataCopy = datasetsCopy[0].data.slice(0);

                this.state.data.labels = [];
                datasetsCopy[0].data = [];

                data.forEach(element => {
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

                this.setState({
                    data: Object.assign({}, this.state.data, {
                        labels: labelCopy,
                        datasets: datasetsCopy
                    })
                });
        }
    }


    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem><NavLink className={classNames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1') }}>
                        Graph
                    </NavLink></NavItem>
                    <NavItem><NavLink className={classNames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2') }}>
                        Table
                    </NavLink></NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <GraphComponent onSubmits={this.onSubmit} onData={this.state} showRows={this.state.rows} showColumns={this.state.columns} />
                    </TabPane>
                    <TabPane tabId="2">
                        <TableComponent onSubmits={this.onSubmit} onData={this.state} />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default MainIndex;
