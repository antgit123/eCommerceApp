import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import './HomeMenu.css';

export default class HomeMenu extends Component {
    displayName = HomeMenu.name;
    constructor(){
        super();
    }

    render() {
        return (
              <Navbar inverse fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem>
                            Categories
                        </NavItem>
                        <NavItem>
                            Counter
                        </NavItem>
                        <NavItem>
                            Fetch data
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
