import React, { Component } from 'react';
import {Card,CardDeck,Button,Col,Badge} from 'react-bootstrap';

export default class ProductCard extends Component {
    constructor(){
        super();
    }

    render() {
        const { product } = this.props;
        const productPrice = "$ " + product.price;
        const productCard = <Card>
            <Col>
                <Badge variant="info" style={{marginBottom: "8px"}}>{product.category}</Badge>
                <Card.Img variant="top" src={product.image} />
            </Col>
            <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{productPrice}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>

            <Card.Footer className="text-center">
                <Button>Add to Cart</Button>
            </Card.Footer>
        </Card>;
        return (
            <Col>
                {productCard}
            </Col>
        );
    }
}

