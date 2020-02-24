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
import { FaTemperatureHigh } from 'react-icons/fa';

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
