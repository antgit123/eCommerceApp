import React from 'react';
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {  Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {Row} from 'react-bootstrap';
import './header.css';

const Header = () =>{
    return (
        <Row>
        <Navbar collapseOnSelect className="headerNav" bg="light" expand="lg">
            {/*<Navbar.Brand href="#home">E-Commerce</Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navItems" id="basic-navbar-nav">
                <Nav.Link>
                    <NavLink to="/">
                        Products
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/cart">
                        Cart
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/user">User Profile</NavLink>
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </Row>
    )
};

export default Header;