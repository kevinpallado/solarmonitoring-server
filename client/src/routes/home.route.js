import React, { Component } from 'react'
import SMNabBar from '../components/default/navbar';
import NodeContent from '../components/dashboard/nodes';
import VoltageContent from '../components/dashboard/voltage';
import TemperatureContent from '../components/dashboard/temperature';
import CurrentContent from '../components/dashboard/current';
import HomeContent from '../components/dashboard/content';
import { Container, Row, Col } from 'reactstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default class HomeRoute extends Component {
    render() {
        return (
            <Router>
                <SMNabBar />
            <div>       
                <Container style={{marginTop: '2rem'}}>
                    <Route exact path="/" component={NodeContent}/>
                    <Route path="/Voltage" component={VoltageContent}/>
                    <Route path="/Temperature" component={TemperatureContent}/>
                    <Route path="/Current" component={CurrentContent}/> 
                    <Row style={{marginTop:'1rem'}} className="border-top">
                        <Col className="border" style={{marginBottom: '2rem',marginTop: '1rem'}}>
                            <HomeContent />
                        </Col>
                    </Row>
                    </Container>
            </div>
            </Router>
        )
    }
}
