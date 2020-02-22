import React, { Component, useState } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label } from 'reactstrap';
import { } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Graph from './main/graph';
import NodesContent from './main/nodes';

export default class Nodes extends Component {
    DataToggle = () => this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });

    render() {
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.DataToggle} className="mt-3">
                    <DropdownToggle caret>
                        Select View
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Graph</DropdownItem>
                        <DropdownItem>Table</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NodesContent />
                <Row className="border-top mt-3">
                </Row>
                <Graph />
            </div>
        )
    }
}
