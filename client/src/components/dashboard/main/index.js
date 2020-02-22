import React, { useState } from 'react';
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
import TableComponent from './table';
import classNames from 'classnames';

function MainIndex(props) {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Nav tabs>
                <NavItem><NavLink className={classNames({ active: activeTab === '1' })} onClick={() => { toggle('1') }}>
                    Node
                </NavLink></NavItem>
                <NavItem><NavLink className={classNames({ active: activeTab === '2' })} onClick={() => { toggle('2') }}>
                    Graph
                </NavLink></NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <NodeComponent />
                </TabPane>
                <TabPane tabId="2">
                    <GraphComponent />
                </TabPane>
            </TabContent>
            {/* <Row style={{ marginTop: '1rem' }} className="border-top">
                <Col className="border" style={{ marginBottom: '2rem', marginTop: '1rem' }}>
                    <TableComponent />
                </Col>
            </Row> */}
        </div>
    );
}

export default MainIndex;
