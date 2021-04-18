import React, { Component } from 'react';
import {Row,Col,Image} from 'react-bootstrap';

export default class CartCard extends Component {
    constructor(){
        super();
    }

    render() {
        const {product} = this.props;
        return (
            <Row key={product.productId}>

                <Col md={4}>
                    <Image src={product.image} width="200" height="200"/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h6>{product.title}</h6>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>$ {product.price}</p>
                        </Col>
                        <Col md={6}>
                            <p>Quantity: {product.quantity}</p>
                        </Col>
                    </Row>

                </Col>
                <Col md={4}>
                    <Row>
                        Total: $ {product.quantity * product.price}
                    </Row>
                </Col>
            </Row>
        );
    }
}

