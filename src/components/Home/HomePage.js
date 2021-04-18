import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductList  from '../Product/ProductList';

export default class HomePage extends Component {

    constructor(){
        super();
        //fetch list of products and pass it on to the products section part
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="appContainer">
                            <ProductList/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}