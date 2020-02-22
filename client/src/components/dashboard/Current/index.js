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
import { AiFillThunderbolt } from 'react-icons/ai';

import GraphComponent from './graph';
import TableComponent from './table';
import classNames from 'classnames';

function MainIndex(props) {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Row xs="1" sm="2" md="3" lg="4" style={{ marginBottom: '.25rem' }}>
                <Col style={{ marginTop: '.25rem' }}>
                    <div className="shadow-sm border  bg-white rounded" style={{ display: 'flex', padding: '.25rem' }}>
                        <span className="p-3 bg-success text-white rounded" style={{ marginRight: '2rem', textAlign: 'center', height: '4rem', marginTop: '.25rem' }}>
                            <AiFillThunderbolt size={32} />
                        </span>
                        <span className="d-inline-block">
                            <p>Current Node 1</p>
                            <p><b>0</b><b>A</b></p>
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
                            <p><b>0</b><b>A</b></p>
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
                            <p><b>0</b><b>A</b></p>
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
                            <p><b>0</b><b>A</b></p>
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
                            <p><b>0</b><b>A</b></p>
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
                            <p><b>0</b><b>A</b></p>
                        </span>
                    </div>
                </Col>
            </Row>

            <Nav tabs>
                <NavItem><NavLink className={classNames({ active: activeTab === '1' })} onClick={() => { toggle('1') }}>
                    Graph
                </NavLink></NavItem>
                <NavItem><NavLink className={classNames({ active: activeTab === '2' })} onClick={() => { toggle('2') }}>
                    Table
                </NavLink></NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <GraphComponent />
                </TabPane>
                <TabPane tabId="2">
                    <TableComponent />
                </TabPane>
            </TabContent>
        </div>
    );
}

export default MainIndex;
