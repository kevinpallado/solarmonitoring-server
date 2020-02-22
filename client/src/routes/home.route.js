import React, { Component } from 'react'
import SMNabBar from '../components/default/navbar';
import NodeContent from '../components/dashboard/main/index';
import VoltageContent from '../components/dashboard/Voltage/index';
import TemperatureContent from '../components/dashboard/Temperature/index';
import CurrentContent from '../components/dashboard/Current/index';
import { Container } from 'reactstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default class HomeRoute extends Component {
    render() {
        return (
            <Router>
                <SMNabBar />
                <div>
                    <Container style={{ marginTop: '2rem' }}>
                        <Route exact path="/" component={NodeContent} />
                        <Route path="/Voltage" component={VoltageContent} />
                        <Route path="/Temperature" component={TemperatureContent} />
                        <Route path="/Current" component={CurrentContent} />
                    </Container>
                </div>
            </Router>
        )
    }
}
