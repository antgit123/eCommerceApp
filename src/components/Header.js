import React from 'react';
import {Link} from 'react-router-dom';
import {  Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {Row} from 'react-bootstrap';
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUserCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Header = () =>{
    return (
        <Row>
        <Navbar collapseOnSelect className="headerNav" bg="dark" expand="lg">
            {/*<Navbar.Brand href="#home">E-Commerce</Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navItems" id="basic-navbar-nav">
                <Nav.Link className="header-link">
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faShoppingBag} className="header-icon"/>
                        Products
                    </NavLink>
                </Nav.Link>
                <Nav.Link className="header-link">
                    <FontAwesomeIcon icon={faShoppingCart} className="header-icon"/>
                    <NavLink to="/cart">
                        Cart
                    </NavLink>
                </Nav.Link>
                <Nav.Link className="header-link">
                    <FontAwesomeIcon icon={faUserCircle} className="header-icon"/>
                    <NavLink to="/user">User Profile</NavLink>
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </Row>
    )
};

export default Header;